import type { Dict } from '../i18n'

export default function WireSection({ t }: { t: Dict }) {
  const L = t.wire.labels
  // S inflow arrows around the wire (from outside pointing to the surface), animated via CSS dash
  const inflows = [
    { x1: 180, y1: 30, x2: 215, y2: 128 },
    { x1: 330, y1: 22, x2: 352, y2: 128 },
    { x1: 480, y1: 30, x2: 488, y2: 128 },
    { x1: 630, y1: 22, x2: 622, y2: 128 },
    { x1: 180, y1: 330, x2: 215, y2: 232 },
    { x1: 330, y1: 338, x2: 352, y2: 232 },
    { x1: 480, y1: 330, x2: 488, y2: 232 },
    { x1: 630, y1: 338, x2: 622, y2: 232 },
  ]
  return (
    <div>
      <svg viewBox="0 0 820 360" className="diagram" role="img" aria-label={t.wire.title}>
        <defs>
          <marker id="wGold" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="14" refY="9" orient="auto">
            <path d="M0,0 L18,9 L0,18 Z" fill="#fbbf24" />
          </marker>
          <marker id="wRed" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
            <path d="M0,0 L16,8 L0,16 Z" fill="#fb7185" />
          </marker>
          <linearGradient id="heat" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        <text x="410" y="24" textAnchor="middle" fontSize="13" fill="#94a3b8">{L.outside}</text>

        {/* the wire */}
        <rect x="90" y="130" width="640" height="100" rx="50" fill="#334155" stroke="#94a3b8" strokeWidth="3" />
        <rect x="110" y="148" width="600" height="64" rx="32" fill="url(#heat)" opacity="0.55" className="heatpulse" />

        {/* E along the wire */}
        <g stroke="#fb7185" strokeWidth="4" fill="none">
          <path d="M180 180 H330" markerEnd="url(#wRed)" />
          <path d="M470 180 H620" markerEnd="url(#wRed)" />
        </g>
        <text x="255" y="168" textAnchor="middle" fontSize="16" fill="#fb7185" fontWeight="800">E →</text>
        <text x="545" y="168" textAnchor="middle" fontSize="16" fill="#fb7185" fontWeight="800">E →</text>
        <text x="410" y="202" textAnchor="middle" fontSize="13" fill="#fecaca" fontWeight="700">🔥 {L.heat}</text>

        {/* B: into page above the wire, out of page below (front) */}
        {[210, 360, 510, 640].map((x) => (
          <g key={`bt${x}`}>
            <circle cx={x} cy="92" r="12" fill="none" stroke="#38bdf8" strokeWidth="2.4" />
            <path d={`M${x - 5.5} ${92 - 5.5} L${x + 5.5} ${92 + 5.5} M${x + 5.5} ${92 - 5.5} L${x - 5.5} ${92 + 5.5}`} stroke="#38bdf8" strokeWidth="2.4" />
          </g>
        ))}
        {[210, 360, 510, 640].map((x) => (
          <g key={`bb${x}`}>
            <circle cx={x} cy="268" r="12" fill="none" stroke="#38bdf8" strokeWidth="2.4" />
            <circle cx={x} cy="268" r="3.2" fill="#38bdf8" />
          </g>
        ))}
        <text x="410" y="66" textAnchor="middle" fontSize="14" fill="#38bdf8" fontWeight="700">B ⊗</text>
        <text x="410" y="306" textAnchor="middle" fontSize="14" fill="#38bdf8" fontWeight="700">B ⊙</text>

        {/* S radial inflow */}
        {inflows.map((a, i) => (
          <path
            key={i}
            d={`M${a.x1} ${a.y1 + (a.y1 < 180 ? 34 : -34)} L${a.x2} ${a.y2}`}
            stroke="#fbbf24"
            strokeWidth="4.5"
            fill="none"
            markerEnd="url(#wGold)"
            className="flowdash"
            style={{ animationDelay: `${i * 0.22}s` }}
          />
        ))}
        <text x="96" y="86" fontSize="15" fill="#fbbf24" fontWeight="800">S ↘</text>
        <text x="690" y="86" fontSize="15" fill="#fbbf24" fontWeight="800">S ↙</text>
        <text x="96" y="292" fontSize="15" fill="#fbbf24" fontWeight="800">S ↗</text>
        <text x="690" y="292" fontSize="15" fill="#fbbf24" fontWeight="800">S ↖</text>
      </svg>

      <ul className="wirelabels">
        <li><span className="dot e" />{L.eIn}</li>
        <li><span className="dot b" />{L.bAround}</li>
        <li><span className="dot s" />{L.sIn}</li>
      </ul>

      <blockquote className="bigquote">
        <p>{t.wire.quote}</p>
        <cite>{t.wire.quoteCite}</cite>
      </blockquote>

      <ul className="bullets">
        {t.wire.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
