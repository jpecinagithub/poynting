import { useState } from 'react'
import type { Dict } from '../i18n'

export default function Quiz({ t }: { t: Dict }) {
  const [sel, setSel] = useState<(number | null)[]>(Array(t.quiz.items.length).fill(null))
  const [done, setDone] = useState(false)
  const score = t.quiz.items.reduce((acc, it, i) => acc + (sel[i] === it.a ? 1 : 0), 0)

  return (
    <div className="quiz">
      {t.quiz.items.map((it, qi) => (
        <fieldset key={qi} className="qcard">
          <legend>
            {qi + 1}. {it.q}
          </legend>
          {it.o.map((opt, oi) => {
            const state = done ? (oi === it.a ? 'right' : sel[qi] === oi ? 'wrong' : '') : sel[qi] === oi ? 'picked' : ''
            return (
              <label key={oi} className={`opt ${state}`}>
                <input
                  type="radio"
                  name={`q${qi}`}
                  checked={sel[qi] === oi}
                  onChange={() => {
                    const next = [...sel]
                    next[qi] = oi
                    setSel(next)
                  }}
                />
                {opt}
                {done && oi === it.a ? ' ✓' : ''}
                {done && sel[qi] === oi && oi !== it.a ? ' ✗' : ''}
              </label>
            )
          })}
        </fieldset>
      ))}
      {!done ? (
        <button className="cta" onClick={() => setDone(true)} disabled={sel.some((s) => s === null)}>
          {t.quiz.check}
        </button>
      ) : (
        <div className="score" role="status">
          <strong>
            {t.quiz.score}: {score}/5
          </strong>
          <p>{score === 5 ? t.quiz.perfect : t.quiz.good}</p>
          <button
            className="ghost"
            onClick={() => {
              setSel(Array(t.quiz.items.length).fill(null))
              setDone(false)
            }}
          >
            {t.quiz.again}
          </button>
        </div>
      )}
    </div>
  )
}
