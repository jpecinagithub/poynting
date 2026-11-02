import { useEffect, useMemo, useState } from 'react'
import type { Dict, Lang } from '../i18n'

type Mode = 'dc' | 'ac'

export default function CircuitLab({ t, lang }: { t: Dict; lang: Lang }) {
  const [mode, setMode] = useState<Mode>('dc')
  const [playing, setPlaying] = useState(true)
  const [showEl, setShowEl] = useState(true)
  const [showE, setShowE] = useState(true)
  const [showB, setShowB] = useState(true)
  const [showS, setShowS] = useState(true)
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setTime((v) => v + 0.05), 50)
    return () => clearInterval(id)
  }, [playing])

  // sign: +1 in DC; in AC it follows sin (period ~6.3s in slow motion)
  const sign = mode === 'dc' ? 1 : Math.sin(time * 1.0) >= 0 ? 1 : -1
  const acPhase = Math.sin(time * 1.0)

  const electrons = useMemo(() => {
    const pts: { x: number; y: number; top: boolean }[] = []
    const N = 9
    for (let i = 0; i < N; i++) {
      const f = i / N
      if (mode === 'dc') {
        // top wire: electrons move LEFT (opposite to I). bottom: RIGHT.
        const xt = 790 - ((f + (time * 0.03) % (1 / N)) % 1) * 640
        const xb = 150 + ((f + (time * 0.03) % (1 / N)) % 1) * 640
        pts.push({ x: xt, y: 110, top: true })
        pts.push({ x: xb, y: 330, top: false })
      } else {
        const off = acPhase * 16
        pts.push({ x: 190 + f * 560 + off, y: 110, top: true })
        pts.push({ x: 190 + f * 560 - off, y: 330, top: false })
      }
    }
    return pts
  }, [mode, time, acPhase])

  const sArrows = useMemo(() => {
    const arr: number[] = []
    for (let i = 0; i < 5; i++) {
      arr.push(215 + ((i * 130 + time * 55) % 560))
    }
    return arr
  }, [time])

  const bSymbols = [270, 400, 530, 660]
  const bRows = [185, 255]

  return (
    <div className="lab">
      <div className="lab-controls" role="group" aria-label={t.lab.layers}>
        <div className="seg">
          <button className={mode === 'dc' ? 'on' : ''} onClick={() => setMode('dc')}>
            {t.lab.dc}
          </button>
          <button className={mode === 'ac' ? 'on' : ''} onClick={() => setMode('ac')}>
            {t.lab.ac}
          </button>
        </div>
        <button className="ghost" onClick={() => setPlaying((p) => !p)}>
          {playing ? `⏸ ${t.lab.play}` : `▶ ${t.lab.pause}`}
        </button>
        <div className="checks">
          <label style={{ ['--c' as string]: '#e2e8f0' }}>
            <input type="checkbox" checked={showEl} onChange={(e) => setShowEl(e.target.checked)} /> {t.lab.showEl}
          </label>
          <label style={{ ['--c' as string]: '#fb7185' }}>
            <input type="checkbox" checked={showE} onChange={(e) => setShowE(e.target.checked)} /> {t.lab.showE}
          </label>
          <label style={{ ['--c' as string]: '#38bdf8' }}>
            <input type="checkbox" checked={showB} onChange={(e) => setShowB(e.target.checked)} /> {t.lab.showB}
          </label>
          <label style={{ ['--c' as string]: '#fbbf24' }}>
            <input type="checkbox" checked={showS} onChange={(e) => setShowS(e.target.checked)} /> {t.lab.showS}
          </label>
        </div>
      </div>

      <svg viewBox="0 0 900 440" className="diagram" role="img" aria-label={t.lab.title}>
        <defs>
          <marker id="arwGold" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="14" refY="9" orient="auto">
            <path d="M0,0 L18,9 L0,18 Z" fill="#fbbf24" />
          </marker>
          <marker id="arwRed" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
            <path d="M0,0 L16,8 L0,16 Z" fill="#fb7185" />
          </marker>
          <marker id="arwWhite" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
            <path d="M0,0 L14,7 L0,14 Z" fill="#e2e8f0" />
          </marker>
        </defs>

        {/* field region */}
        <rect x="150" y="110" width="640" height="220" fill="#38bdf8" opacity="0.05" rx="10" />

        {/* wires */}
        <line x1="150" y1="110" x2="790" y2="110" stroke="#94a3b8" strokeWidth="14" strokeLinecap="round" />
        <line x1="150" y1="330" x2="790" y2="330" stroke="#94a3b8" strokeWidth="14" strokeLinecap="round" />

        {/* source (battery) */}
        <g>
          <line x1="150" y1="110" x2="150" y2="330" stroke="#475569" strokeWidth="4" strokeDasharray="3 8" />
          <rect x="118" y="185" width="64" height="72" rx="10" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
          <text x="150" y="216" textAnchor="middle" fontSize="26" fill="#fbbf24" fontWeight="700">⚡</text>
          <text x="150" y="242" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="700">{t.lab.source}</text>
          <text x="132" y="102" fontSize="20" fill="#fb7185" fontWeight="800">{sign > 0 ? '+' : '−'}</text>
          <text x="132" y="356" fontSize="20" fill="#38bdf8" fontWeight="800">{sign > 0 ? '−' : '+'}</text>
        </g>

        {/* load (bulb) */}
        <g>
          <line x1="790" y1="110" x2="790" y2="330" stroke="#475569" strokeWidth="4" strokeDasharray="3 8" />
          <circle cx="790" cy="220" r="34" fill="#fef3c7" opacity="0.18" />
          <circle cx="790" cy="220" r="24" fill="#fde68a" opacity="0.9" />
          <text x="790" y="228" textAnchor="middle" fontSize="20">💡</text>
          <text x="790" y="282" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="700">{t.lab.load}</text>
          {/* S entering the load */}
          {showS && (
            <g stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.95">
              <path d="M742 176 Q766 196 772 202" markerEnd="url(#arwGold)" />
              <path d="M742 264 Q766 244 772 238" markerEnd="url(#arwGold)" />
            </g>
          )}
        </g>

        {/* conventional current I arrows on wires */}
        <g stroke="#e2e8f0" strokeWidth="2.5" fill="none">
          {sign > 0 ? (
            <>
              <path d="M330 92 H430" markerEnd="url(#arwWhite)" />
              <path d="M610 348 H510" markerEnd="url(#arwWhite)" />
            </>
          ) : (
            <>
              <path d="M430 92 H330" markerEnd="url(#arwWhite)" />
              <path d="M510 348 H610" markerEnd="url(#arwWhite)" />
            </>
          )}
        </g>
        <text x="380" y="82" textAnchor="middle" fontSize="15" fill="#e2e8f0" fontWeight="700">
          I {sign > 0 ? '→' : '←'}
        </text>
        <text x="560" y="376" textAnchor="middle" fontSize="15" fill="#e2e8f0" fontWeight="700">
          I {sign > 0 ? '←' : '→'}
        </text>
        <text x="470" y="98" textAnchor="middle" fontSize="12" fill="#94a3b8">{t.lab.topWire}</text>
        <text x="470" y="398" textAnchor="middle" fontSize="12" fill="#94a3b8">{t.lab.bottomWire}</text>

        {/* E arrows between wires */}
        {showE &&
          [270, 400, 530, 660].map((x) =>
            sign > 0 ? (
              <g key={`e${x}`} stroke="#fb7185" strokeWidth="4" fill="none" className="pulse">
                <path d={`M${x} 140 V300`} markerEnd="url(#arwRed)" opacity="0.9" />
              </g>
            ) : (
              <g key={`e${x}`} stroke="#fb7185" strokeWidth="4" fill="none" className="pulse">
                <path d={`M${x} 300 V140`} markerEnd="url(#arwRed)" opacity="0.9" />
              </g>
            ),
          )}
        {showE && (
          <text x="228" y="228" fontSize="20" fill="#fb7185" fontWeight="800">
            E {sign > 0 ? '↓' : '↑'}
          </text>
        )}

        {/* B symbols between wires */}
        {showB &&
          bRows.map((y) =>
            bSymbols.map((x) => (
              <g key={`b${x}-${y}`}>
                <circle cx={x} cy={y} r="13" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                {sign > 0 ? (
                  <path d={`M${x - 6} ${y - 6} L${x + 6} ${y + 6} M${x + 6} ${y - 6} L${x - 6} ${y + 6}`} stroke="#38bdf8" strokeWidth="2.5" />
                ) : (
                  <circle cx={x} cy={y} r="3.5" fill="#38bdf8" />
                )}
              </g>
            )),
          )}
        {showB && (
          <text x="196" y="160" fontSize="15" fill="#38bdf8" fontWeight="700">
            B {sign > 0 ? '⊗' : '⊙'}
          </text>
        )}

        {/* S arrows: always source -> load */}
        {showS &&
          sArrows.map((x, i) => (
            <g key={`s${i}`} stroke="#fbbf24" strokeWidth="5" fill="none">
              <path d={`M${x} 220 H${x + 62}`} markerEnd="url(#arwGold)" />
            </g>
          ))}
        {showS && (
          <text x="470" y="205" textAnchor="middle" fontSize="17" fill="#fbbf24" fontWeight="800">
            S →
          </text>
        )}

        {/* electrons */}
        {showEl &&
          electrons.map((p, i) => (
            <g key={`el${i}`}>
              <circle cx={p.x} cy={p.y} r="7.5" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1.6" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="9" fill="#e2e8f0" fontWeight="700">e⁻</text>
            </g>
          ))}
      </svg>

      <div className="lab-captions">
        <p><span className="dot e" /> {t.lab.eBetween}</p>
        <p><span className="dot b" /> {sign > 0 ? t.lab.bInto : t.lab.bOut}</p>
        <p><span className="dot s" /> {t.lab.sFlow}</p>
        {mode === 'ac' && <p className="acnote">⏱ {t.lab.acNote}</p>}
      </div>

      <h3>{t.lab.readingTitle}</h3>
      <ol className="steps">
        {t.lab.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <p className="sr" aria-live="polite">
        {lang === 'es'
          ? `Modo ${mode === 'dc' ? 'continua' : 'alterna'}. S apunta siempre de la fuente a la carga.`
          : `Mode ${mode === 'dc' ? 'DC' : 'AC'}. S always points from source to load.`}
      </p>
    </div>
  )
}
