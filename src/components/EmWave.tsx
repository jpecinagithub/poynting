import { useEffect, useMemo, useState } from 'react'
import type { Dict } from '../i18n'

export default function EmWave({ t }: { t: Dict }) {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTime((v) => v + 0.06), 50)
    return () => clearInterval(id)
  }, [])

  const X0 = 70
  const X1 = 830
  const CY = 190
  const K = (2 * Math.PI) / 300

  const ePts = useMemo(() => {
    const pts: string[] = []
    for (let x = X0; x <= X1; x += 6) {
      const y = CY - Math.sin((x - X0) * K + time * 2.2) * 78
      pts.push(`${x},${y}`)
    }
    return pts.join(' ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  const samples = useMemo(() => {
    const out: { x: number; e: number }[] = []
    for (let x = X0 + 58; x <= X1 - 10; x += 62) {
      out.push({ x, e: Math.sin((x - X0) * K + time * 2.2) })
    }
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <div>
      <svg viewBox="0 0 900 380" className="diagram" role="img" aria-label={t.wave.title}>
        <defs>
          <marker id="wvGold" markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="20" refX="16" refY="10" orient="auto">
            <path d="M0,0 L20,10 L0,20 Z" fill="#fbbf24" />
          </marker>
          <marker id="wvRed" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" refX="10" refY="6.5" orient="auto">
            <path d="M0,0 L13,6.5 L0,13 Z" fill="#fb7185" />
          </marker>
        </defs>

        {/* propagation axis */}
        <line x1={X0} y1={CY} x2={X1 + 30} y2={CY} stroke="#475569" strokeWidth="2" strokeDasharray="6 6" />

        {/* E wave */}
        <polyline points={ePts} fill="none" stroke="#fb7185" strokeWidth="3.5" />

        {/* E vectors + B symbols at samples */}
        {samples.map((s, i) => {
          const yTop = CY - s.e * 78
          return (
            <g key={i}>
              <line x1={s.x} y1={CY} x2={s.x} y2={yTop} stroke="#fb7185" strokeWidth="2.4" markerEnd="url(#wvRed)" opacity="0.9" />
              <circle cx={s.x} cy={CY + 62} r="12" fill="none" stroke="#38bdf8" strokeWidth="2.3" />
              {s.e >= 0 ? (
                <path
                  d={`M${s.x - 5.5} ${CY + 62 - 5.5} L${s.x + 5.5} ${CY + 62 + 5.5} M${s.x + 5.5} ${CY + 62 - 5.5} L${s.x - 5.5} ${CY + 62 + 5.5}`}
                  stroke="#38bdf8"
                  strokeWidth="2.3"
                />
              ) : (
                <circle cx={s.x} cy={CY + 62} r="3.2" fill="#38bdf8" />
              )}
              {/* B strength bars proportional to |e| (B in phase with E) */}
              <rect x={s.x - 9} y={CY + 88} width="18" height={Math.max(2, Math.abs(s.e) * 22)} fill="#38bdf8" opacity="0.55" />
            </g>
          )
        })}

        {/* S arrow */}
        <g stroke="#fbbf24" strokeWidth="6" fill="none">
          <path d={`M${X0 + 240} 330 H${X0 + 430}`} markerEnd="url(#wvGold)" />
        </g>
        <text x={X0 + 335} y="318" textAnchor="middle" fontSize="19" fill="#fbbf24" fontWeight="800">S →</text>

        <text x={X0 + 6} y="86" fontSize="16" fill="#fb7185" fontWeight="700">E</text>
        <text x={X0 + 6} y={CY + 68} fontSize="16" fill="#38bdf8" fontWeight="700">B</text>
      </svg>
      <ul className="wirelabels">
        <li><span className="dot e" />{t.wave.eWave}</li>
        <li><span className="dot b" />{t.wave.bWave}</li>
        <li><span className="dot s" />{t.wave.sWave}</li>
      </ul>
    </div>
  )
}
