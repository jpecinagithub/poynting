import { useEffect, useState } from 'react'
import { dict, paperExcerpts, type Lang } from './i18n'
import CircuitLab from './components/CircuitLab'
import WireSection from './components/WireSection'
import EmWave from './components/EmWave'
import Quiz from './components/Quiz'

export default function App() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('poynting-lang') as Lang) || 'es')
  const t = dict[lang]

  useEffect(() => {
    localStorage.setItem('poynting-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const navItems: [string, string][] = [
    ['idea', t.nav.idea],
    ['lab', t.nav.lab],
    ['cable', t.nav.cable],
    ['onda', t.nav.wave],
    ['bio', t.nav.bio],
    ['texto', t.nav.paper],
    ['teoria', t.nav.theory],
    ['practica', t.nav.practice],
    ['quiz', t.nav.quiz],
    ['fuentes', t.nav.sources],
  ]

  return (
    <div className="app">
      <a className="skip" href="#main">{t.skip}</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Poynting">
          <span className="brand-s">S</span>
          <span>
            POYNTING <small>1884</small>
          </span>
        </a>
        <nav className="nav" aria-label="Índice">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div className="langswitch" role="group" aria-label="Language / Idioma">
          <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="kicker">{t.hero.kicker}</p>
          <h1>
            {t.hero.title} <span className="accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="lead">{t.hero.sub}</p>
          <div className="formula" aria-label="S equals E cross H">
            <span className="fs">S</span> <span className="op">=</span> <span className="fe">E</span>{' '}
            <span className="op">×</span> <span className="fb">H</span>
            <small>{t.hero.formulaNote}</small>
          </div>
          <div className="cta-row">
            <a className="cta" href="#lab">{t.hero.ctaLab}</a>
            <a className="cta ghost-link" href="#texto">{t.hero.ctaPaper}</a>
          </div>
          <div className="stats">
            {t.hero.stats.map((s) => (
              <div key={s.l} className="stat">
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
          <div className="legend">
            <h2>{t.legend.title}</h2>
            <ul>
              <li><span className="dot e" /><strong className="ce">E</strong> — {t.legend.e.split('—')[1]}</li>
              <li><span className="dot b" /><strong className="cb">B</strong> — {t.legend.b.split('—')[1]}</li>
              <li><span className="dot s" /><strong className="cs">S</strong> — {t.legend.s.split('—')[1]}</li>
              <li><span className="dot el" />{t.legend.el}</li>
              <li><span className="dot i" />{t.legend.i}</li>
            </ul>
          </div>
        </section>

        <section id="idea" className="section">
          <p className="kicker">{t.idea.kicker}</p>
          <h2>{t.idea.title}</h2>
          <div className="compare">
            <article className="card bad">
              <h3>✗ {t.idea.beforeTitle}</h3>
              <p>{t.idea.before}</p>
              <div className="mini-diagram" aria-hidden="true">
                <span className="pipe">💧 ═══════════▶</span>
                <small>{lang === 'es' ? 'energía “dentro”, como agua en una tubería' : 'energy “inside”, like water in a pipe'}</small>
              </div>
            </article>
            <article className="card good">
              <h3>✓ {t.idea.afterTitle}</h3>
              <p>{t.idea.after}</p>
              <div className="mini-diagram" aria-hidden="true">
                <span className="fieldflow">S ⇢ ⇢ ⇢ ⇢ ⇢</span>
                <small>{lang === 'es' ? 'energía en el campo alrededor de los cables' : 'energy in the field around the wires'}</small>
              </div>
            </article>
          </div>
          <div className="points">
            {t.idea.points.map((p) => (
              <article key={p.t} className="card">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="lab" className="section">
          <p className="kicker">{t.lab.kicker}</p>
          <h2>{t.lab.title}</h2>
          <p className="intro">{t.lab.intro}</p>
          <CircuitLab t={t} lang={lang} />
        </section>

        <section id="cable" className="section">
          <p className="kicker">{t.wire.kicker}</p>
          <h2>{t.wire.title}</h2>
          <p className="intro">{t.wire.intro}</p>
          <WireSection t={t} />
        </section>

        <section id="onda" className="section">
          <p className="kicker">{t.wave.kicker}</p>
          <h2>{t.wave.title}</h2>
          <p className="intro">{t.wave.intro}</p>
          <EmWave t={t} />
          <article className="card hand">
            <h3>✋ {t.hand.title}</h3>
            <ul>
              {t.hand.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>{t.hand.note}</p>
            <p className="cross-eq" aria-hidden="true">
              <span className="ce">↓ E</span> × <span className="cb">⊗ B</span> = <span className="cs">→ S</span>
            </p>
          </article>
        </section>

        <section id="bio" className="section">
          <p className="kicker">{t.bio.kicker}</p>
          <h2>{t.bio.title}</h2>
          <div className="bio-grid">
            <figure className="portrait">
              <img src="/poynting.jpg" alt="John Henry Poynting" width={554} height={754} loading="lazy" />
              <figcaption>{t.bio.photoCaption}</figcaption>
            </figure>
            <div>
              <p className="lead-sm">{t.bio.lead}</p>
              {t.bio.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="card fairness">
                <h3>{t.bio.fairnessTitle}</h3>
                <p>{t.bio.fairness}</p>
              </div>
            </div>
          </div>
          <ol className="timeline">
            {t.bio.timeline.map((ev) => (
              <li key={ev.y}>
                <strong>{ev.y}</strong>
                <span>{ev.e}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="texto" className="section">
          <p className="kicker">{t.paper.kicker}</p>
          <h2>{t.paper.title}</h2>
          <dl className="meta">
            {t.paper.meta.map((m) => (
              <div key={m.k}>
                <dt>{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </dl>
          <div className="cta-row">
            <a className="cta" href="https://en.wikisource.org/wiki/On_the_Transfer_of_Energy_in_the_Electromagnetic_Field" target="_blank" rel="noreferrer">
              {t.paper.readFull} ↗
            </a>
            <a className="cta ghost-link" href="https://royalsocietypublishing.org/rstl/article/doi/10.1098/rstl.1884.0016/119316/XV-On-the-transfer-of-energy-in-the" target="_blank" rel="noreferrer">
              {t.paper.readRoyal} ↗
            </a>
          </div>

          <h3>{t.paper.openingTitle}</h3>
          <p className="note">{t.paper.openingNote}</p>
          <blockquote className="paper">
            <p className="paper-head">
              XV. <em>On the Transfer of Energy in the Electromagnetic Field.</em>
              <br />
              By J. H. Poynting, M.A., late Fellow of Trinity College, Cambridge, Professor of Physics, Mason College, Birmingham.
              <br />
              Communicated by Lord Rayleigh, M.A., D.C.L., F.R.S. — Received December 17, 1883, — Read January 10, 1884.
            </p>
            {paperExcerpts.opening.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>

          <h3>{t.paper.keyPassageTitle}</h3>
          <blockquote className="paper">
            <p>{paperExcerpts.thesis}</p>
          </blockquote>
          <p className="note">{t.paper.keyPassageNote}</p>

          <h3>{t.paper.wireTitle}</h3>
          <blockquote className="paper">
            <p>{paperExcerpts.wire}</p>
          </blockquote>
          <p className="note">{t.paper.wireNote}</p>
          <p className="note">{t.paper.downloadNote}</p>
        </section>

        <section id="teoria" className="section">
          <p className="kicker">{t.theory.kicker}</p>
          <h2>{t.theory.title}</h2>
          <p className="intro">{t.theory.intro}</p>
          <div className="formula big" aria-label={t.theory.equationNote}>
            {t.theory.equationNote}
          </div>
          <div className="points">
            {t.theory.terms.map((term) => (
              <article key={term.s} className="card">
                <h3>
                  <span className="term">{term.s}</span> {term.t}
                </h3>
                <p>{term.d}</p>
              </article>
            ))}
          </div>
          <p className="integral">{t.theory.integral}</p>
        </section>

        <section id="practica" className="section highlight">
          <p className="kicker">{t.practice.kicker}</p>
          <h2>{t.practice.title}</h2>
          <p className="intro">{t.practice.intro}</p>
          <div className="points two">
            {t.practice.cards.map((c) => (
              <article key={c.t} className="card">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
          <h3>{t.practice.mythTitle}</h3>
          <div className="myths">
            {t.practice.myths.map((m) => (
              <div key={m.m} className="myth">
                <p className="m">✗ {m.m}</p>
                <p className="r">✓ {m.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="quiz" className="section">
          <p className="kicker">{t.quiz.kicker}</p>
          <h2>{t.quiz.title}</h2>
          <Quiz t={t} />
        </section>

        <section id="fuentes" className="section">
          <p className="kicker">{t.sources.kicker}</p>
          <h2>{t.sources.title}</h2>
          <ul className="sources">
            {t.sources.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p className="foot-s">
          <span className="ce">E</span> × <span className="cb">B</span> → <span className="cs">S</span>
        </p>
        <p>{t.sources.footer}</p>
        <p className="small">Poynting · 1884 — EN / ES · PWA</p>
      </footer>
    </div>
  )
}
