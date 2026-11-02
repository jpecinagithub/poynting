import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Dict } from '../i18n'
import { flatParagraphs, paperByline, paperComms, paperSections, paperTitle, paraIndexBySection } from '../paper'

type Tool = 'read' | 'highlight' | 'pen' | 'text' | 'erase'
type Ranges = [number, number][]
type HL = Record<number, Ranges>
interface Note {
  id: number
  x: number
  y: number
  text: string
}
type Stroke = [number, number][]

const LS_KEY = 'poynting-doc-v1'
const PEN = '#dc2626'

interface Saved {
  hl: HL
  strokes: Stroke[]
  notes: Note[]
  scale: number
}

function loadSaved(): Saved {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      const s = JSON.parse(raw) as Saved
      return { hl: s.hl || {}, strokes: s.strokes || [], notes: s.notes || [], scale: s.scale || 1 }
    }
  } catch {
    /* ignore */
  }
  return { hl: {}, strokes: [], notes: [], scale: 1 }
}

function mergeRanges(ranges: Ranges): Ranges {
  const sorted = [...ranges].sort((a, b) => a[0] - b[0])
  const out: Ranges = []
  for (const r of sorted) {
    const last = out[out.length - 1]
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1])
    else out.push([...r])
  }
  return out
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function paraHtml(text: string, ranges: Ranges | undefined): string {
  if (!ranges || ranges.length === 0) return esc(text)
  let html = ''
  let last = 0
  for (const [s, e] of mergeRanges(ranges)) {
    html += esc(text.slice(last, s))
    html += `<mark style="background:#ffec70;color:inherit;padding:0 1px;border-radius:2px">${esc(text.slice(s, e))}</mark>`
    last = Math.max(last, e)
  }
  html += esc(text.slice(last))
  return html
}

export default function DocViewer({ t, lang }: { t: Dict; lang: 'es' | 'en' }) {
  const d = t.doc
  const initial = useMemo(loadSaved, [])
  const [tool, setTool] = useState<Tool>('read')
  const [hl, setHl] = useState<HL>(initial.hl)
  const [strokes, setStrokes] = useState<Stroke[]>(initial.strokes)
  const [notes, setNotes] = useState<Note[]>(initial.notes)
  const [scale, setScale] = useState(initial.scale)
  const [size, setSize] = useState({ w: 880, h: 1200 })
  const [progress, setProgress] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const drawingRef = useRef<Stroke | null>(null)
  const [drawing, setDrawing] = useState<Stroke | null>(null)
  const historyRef = useRef<string[]>([])
  const noteIdRef = useRef(Math.max(0, ...initial.notes.map((n) => n.id)) + 1)
  const dragRef = useRef<{ id: number; dx: number; dy: number } | null>(null)

  /* persistence */
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ hl, strokes, notes, scale } satisfies Saved))
    } catch {
      /* storage full/blocked: annotations still work in-session */
    }
  }, [hl, strokes, notes, scale])

  /* measure content for the drawing layer */
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setSize({ w: el.offsetWidth, h: el.offsetHeight })
    })
    ro.observe(el)
    setSize({ w: el.offsetWidth, h: el.offsetHeight })
    return () => ro.disconnect()
  }, [])

  /* reading progress */
  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight * 0.4
      const done = Math.min(1, Math.max(0, -r.top / Math.max(1, total)))
      setProgress(done)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const snapshot = useCallback(() => {
    historyRef.current.push(JSON.stringify({ hl, strokes, notes }))
    if (historyRef.current.length > 60) historyRef.current.shift()
  }, [hl, strokes, notes])

  const undo = () => {
    const prev = historyRef.current.pop()
    if (!prev) return
    const s = JSON.parse(prev) as Saved
    setHl(s.hl)
    setStrokes(s.strokes)
    setNotes(s.notes)
  }

  const clearAll = () => {
    if (Object.keys(hl).length === 0 && strokes.length === 0 && notes.length === 0) return
    if (!window.confirm(d.clearConfirm)) return
    snapshot()
    setHl({})
    setStrokes([])
    setNotes([])
  }

  /* ---------- highlight from text selection ---------- */
  const handleSelection = () => {
    if (tool !== 'highlight') return
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return
    const range = sel.getRangeAt(0)
    const root = contentRef.current
    if (!root || !root.contains(range.commonAncestorContainer)) return

    const additions: Record<number, Ranges> = {}
    root.querySelectorAll<HTMLElement>('[data-para]').forEach((pEl) => {
      const idx = Number(pEl.dataset.para)
      let intersects = false
      try {
        intersects = range.intersectsNode(pEl)
      } catch {
        intersects = false
      }
      if (!intersects) return
      const full = pEl.textContent || ''
      const lenBefore = (node: Node, offset: number) => {
        const r = document.createRange()
        r.selectNodeContents(pEl)
        r.setEnd(node, offset)
        return r.toString().length
      }
      const start = pEl.contains(range.startContainer) ? lenBefore(range.startContainer, range.startOffset) : 0
      const end = pEl.contains(range.endContainer) ? lenBefore(range.endContainer, range.endOffset) : full.length
      if (end > start) {
        additions[idx] = [[start, end]]
      }
    })
    if (Object.keys(additions).length === 0) return
    snapshot()
    setHl((prev) => {
      const next = { ...prev }
      for (const [k, v] of Object.entries(additions)) {
        const i = Number(k)
        next[i] = mergeRanges([...(next[i] || []), ...v])
      }
      return next
    })
    sel.removeAllRanges()
  }

  /* ---------- red pen ---------- */
  const svgPoint = (e: React.PointerEvent): [number, number] => {
    const svg = e.currentTarget as unknown as SVGSVGElement
    const rect = svg.getBoundingClientRect()
    return [
      Math.round(((e.clientX - rect.left) / rect.width) * size.w * 10) / 10,
      Math.round(((e.clientY - rect.top) / rect.height) * size.h * 10) / 10,
    ]
  }
  const penDown = (e: React.PointerEvent) => {
    if (tool !== 'pen') return
    ;(e.currentTarget as unknown as Element).setPointerCapture?.(e.pointerId)
    const stroke: Stroke = [svgPoint(e)]
    drawingRef.current = stroke
    setDrawing(stroke)
  }
  const penMove = (e: React.PointerEvent) => {
    if (tool !== 'pen' || !drawingRef.current) return
    const p = svgPoint(e)
    const cur = drawingRef.current
    const last = cur[cur.length - 1]
    if (Math.abs(p[0] - last[0]) + Math.abs(p[1] - last[1]) < 2) return
    const next = [...cur, p]
    drawingRef.current = next
    setDrawing(next)
  }
  const penUp = () => {
    if (tool !== 'pen' || !drawingRef.current) return
    const finished: Stroke = drawingRef.current
    drawingRef.current = null
    setDrawing(null)
    if (finished.length > 1) {
      snapshot()
      setStrokes((prev) => [...prev, finished])
    }
  }

  /* ---------- text notes ---------- */
  const contentPoint = (clientX: number, clientY: number): [number, number] => {
    const el = contentRef.current
    if (!el) return [0, 0]
    const rect = el.getBoundingClientRect()
    return [Math.round(clientX - rect.left), Math.round(clientY - rect.top)]
  }
  const onContentClick = (e: React.MouseEvent) => {
    if (tool !== 'text') return
    const target = e.target as HTMLElement
    if (target.closest('.docnote') || target.closest('button') || target.closest('a')) return
    const [x, y] = contentPoint(e.clientX, e.clientY)
    snapshot()
    const id = noteIdRef.current++
    setNotes((prev) => [...prev, { id, x: Math.max(0, x - 10), y: Math.max(0, y - 10), text: '' }])
  }
  const noteDragStart = (e: React.PointerEvent, note: Note) => {
    if (tool === 'pen') return
    const el = contentRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    dragRef.current = { id: note.id, dx: e.clientX - rect.left - note.x, dy: e.clientY - rect.top - note.y }
    snapshot()
    ;(e.currentTarget as Element).setPointerCapture?.(e.pointerId)
  }
  const noteDragMove = (e: React.PointerEvent) => {
    const drag = dragRef.current
    const el = contentRef.current
    if (!drag || !el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.round(e.clientX - rect.left - drag.dx))
    const y = Math.max(0, Math.round(e.clientY - rect.top - drag.dy))
    setNotes((prev) => prev.map((n) => (n.id === drag.id ? { ...n, x, y } : n)))
  }
  const noteDragEnd = () => {
    dragRef.current = null
  }
  const deleteNote = (id: number) => {
    snapshot()
    setNotes((prev) => prev.filter((n) => n.id !== id))
  }

  /* ---------- erase ---------- */
  const eraseMark = (para: number, start: number) => {
    if (tool !== 'erase') return
    snapshot()
    setHl((prev) => {
      const next = { ...prev }
      next[para] = (next[para] || []).filter(([s]) => s !== start)
      if (next[para].length === 0) delete next[para]
      return next
    })
  }
  const eraseStroke = (i: number) => {
    if (tool !== 'erase') return
    snapshot()
    setStrokes((prev) => prev.filter((_, j) => j !== i))
  }

  /* ---------- export ---------- */
  const buildExport = (forPrint: boolean): string => {
    const sectionsHtml = paperSections
      .map((s) => {
        const ps = paraIndexBySection[s.id]
          .map((gi) => `<p>${paraHtml(flatParagraphs[gi].text, hl[gi])}</p>`)
          .join('\n')
        return `<h2>${esc(s.heading)}</h2>\n${ps}`
      })
      .join('\n')
    const strokesSvg = `<svg style="position:absolute;left:0;top:0" width="${size.w}" height="${size.h}" viewBox="0 0 ${size.w} ${size.h}">${[
      ...strokes,
    ]
      .map(
        (st) =>
          `<polyline points="${st.map((p) => `${p[0]},${p[1]}`).join(' ')}" fill="none" stroke="${PEN}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.88"/>`,
      )
      .join('')}</svg>`
    const notesHtml = notes
      .filter((n) => n.text.trim().length > 0)
      .map(
        (n) =>
          `<div style="position:absolute;left:${n.x}px;top:${n.y}px;max-width:240px;color:${PEN};font-family:'Segoe Print','Bradley Hand',cursive;font-size:17px;line-height:1.35;transform:rotate(-1deg);white-space:pre-wrap">${esc(n.text)}</div>`,
      )
      .join('')
    const date = new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Poynting (1884) — annotated</title>
<style>
body{margin:0;background:#e8e2d0;font-family:Georgia,'Times New Roman',serif;color:#26221a}
.sheet{position:relative;width:${size.w}px;max-width:96vw;margin:24px auto;background:#f8f3e3;padding:56px 60px;box-shadow:0 12px 40px rgba(0,0,0,.3);box-sizing:border-box}
h1{font-size:23px;text-align:center;margin:0 0 6px}
.byline{text-align:center;font-style:italic;margin:2px 0}
.comms{text-align:center;font-size:13.5px;color:#5a5340;border-bottom:1px solid #c9bc92;padding-bottom:14px}
h2{font-size:16px;letter-spacing:.06em;text-transform:uppercase;margin:26px 0 8px;color:#4a4230}
p{font-size:${Math.round(17.5 * scale)}px;line-height:1.75;text-align:justify;margin:0 0 13px}
.foot{margin-top:28px;border-top:1px solid #c9bc92;padding-top:10px;font-size:12.5px;color:#6b6350;text-align:center}
@media print{body{background:#fff}.sheet{box-shadow:none;margin:0 auto}}
</style></head><body>
<div class="sheet" id="sheet">
<h1>${esc(paperTitle)}</h1>
<p class="byline">${esc(paperByline)}</p>
<p class="comms">${esc(paperComms)}</p>
${sectionsHtml}
<div class="foot">${esc(d.exportedWith)} · ${esc(d.annotatedOn)} ${esc(date)}</div>
<div style="position:absolute;left:0;top:0;width:${size.w}px;height:${size.h}px;pointer-events:none">${strokesSvg}${notesHtml}</div>
</div>
${forPrint ? '<script>window.onload=function(){setTimeout(function(){window.print()},350)}</script>' : ''}
</body></html>`
  }

  const downloadHtml = () => {
    const blob = new Blob([buildExport(false)], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = lang === 'es' ? 'poynting-1884-anotado.html' : 'poynting-1884-annotated.html'
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 4000)
  }
  const printPdf = () => {
    const w = window.open('', '_blank')
    if (!w) {
      downloadHtml()
      return
    }
    w.document.open()
    w.document.write(buildExport(true))
    w.document.close()
  }

  /* ---------- render helpers ---------- */
  const renderPara = (gi: number) => {
    const text = flatParagraphs[gi].text
    const ranges = hl[gi]
    if (!ranges || ranges.length === 0) return text
    const parts: React.ReactNode[] = []
    let last = 0
    mergeRanges(ranges).forEach(([s, e], i) => {
      if (s > last) parts.push(<span key={`t${i}`}>{text.slice(last, s)}</span>)
      parts.push(
        <mark
          key={`m${i}`}
          className="hlmark"
          onClick={() => eraseMark(gi, s)}
          title={tool === 'erase' ? d.toolErase : undefined}
        >
          {text.slice(s, e)}
        </mark>,
      )
      last = Math.max(last, e)
    })
    if (last < text.length) parts.push(<span key="end">{text.slice(last)}</span>)
    return parts
  }

  const hint =
    tool === 'read'
      ? d.hintRead
      : tool === 'highlight'
        ? d.hintHighlight
        : tool === 'pen'
          ? d.hintPen
          : tool === 'text'
            ? d.hintText
            : d.hintErase

  const toolBtn = (id: Tool, icon: string, label: string) => (
    <button
      key={id}
      className={`toolbtn ${tool === id ? 'on' : ''}`}
      aria-pressed={tool === id}
      onClick={() => setTool(id)}
      title={label}
    >
      <span aria-hidden="true">{icon}</span> {label}
    </button>
  )

  return (
    <div className="docviewer" ref={wrapRef}>
      <div className="doc-progress" aria-hidden="true">
        <div style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      <div className="doctools" role="group" aria-label={d.tools}>
        {toolBtn('read', '👆', d.toolRead)}
        {toolBtn('highlight', '🖍️', d.toolHighlight)}
        {toolBtn('pen', '✒️', d.toolPen)}
        {toolBtn('text', '✏️', d.toolText)}
        {toolBtn('erase', '🧽', d.toolErase)}
        <span className="toolsep" />
        <button className="toolbtn" onClick={undo} title={d.undo}>↩ {d.undo}</button>
        <button className="toolbtn danger" onClick={clearAll} title={d.clear}>🗑 {d.clear}</button>
        <span className="toolsep" />
        <button className="toolbtn" onClick={() => setScale((s) => Math.max(0.85, Math.round((s - 0.08) * 100) / 100))} title={d.fontSmaller} aria-label={d.fontSmaller}>A−</button>
        <button className="toolbtn" onClick={() => setScale((s) => Math.min(1.35, Math.round((s + 0.08) * 100) / 100))} title={d.fontBigger} aria-label={d.fontBigger}>A+</button>
        <span className="toolsep" />
        <button className="toolbtn dl" onClick={downloadHtml}>⬇ {d.downloadHtml}</button>
        <button className="toolbtn dl" onClick={printPdf}>🖨 {d.printPdf}</button>
      </div>
      <p className="dochint" aria-live="polite">
        💡 {hint} <span className="docsaved">· {d.saved}</span>
      </p>

      <div className="doctoc" aria-label="Índice del documento">
        {paperSections.map((s) => (
          <button
            key={s.id}
            onClick={() => document.getElementById(`docsec-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            {s.heading.replace(/^Applications of the law — /, '')}
          </button>
        ))}
      </div>

      <div
        className={`docpage tool-${tool}`}
        ref={contentRef}
        onMouseUp={handleSelection}
        onTouchEnd={handleSelection}
        onClick={onContentClick}
      >
        <div className="docpaper" style={{ fontSize: `${scale}em` }}>
          <p className="doc-pp">Phil. Trans. R. Soc. Lond. 175, pp. 343–361</p>
          <h3 className="doc-title">{paperTitle}</h3>
          <p className="doc-byline">{paperByline}</p>
          <p className="doc-comms">{paperComms}</p>
          {paperSections.map((s) => (
            <section key={s.id} id={`docsec-${s.id}`} className="docsec">
              <h4>{s.heading}</h4>
              {paraIndexBySection[s.id].map((gi, pi) => (
                <p key={gi} data-para={gi} className={pi === 0 && s.id === 'intro' ? 'dropcap' : undefined}>
                  {renderPara(gi)}
                </p>
              ))}
            </section>
          ))}
          <p className="doc-end">— ✦ —</p>
        </div>

        {/* red-pen drawing layer */}
        <svg
          className="penlayer"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          style={{ pointerEvents: tool === 'pen' || tool === 'erase' ? 'auto' : 'none', touchAction: tool === 'pen' ? 'none' : undefined }}
          onPointerDown={penDown}
          onPointerMove={penMove}
          onPointerUp={penUp}
          aria-hidden="true"
        >
          {strokes.map((st, i) => (
            <polyline
              key={i}
              points={st.map((p) => `${p[0]},${p[1]}`).join(' ')}
              fill="none"
              stroke={PEN}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.88}
              style={{ pointerEvents: tool === 'erase' ? 'stroke' : 'none', cursor: tool === 'erase' ? 'pointer' : undefined }}
              onClick={() => eraseStroke(i)}
            />
          ))}
          {drawing && (
            <polyline
              points={drawing.map((p) => `${p[0]},${p[1]}`).join(' ')}
              fill="none"
              stroke={PEN}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.88}
            />
          )}
        </svg>

        {/* text notes */}
        {notes.map((n) => (
          <div key={n.id} className="docnote" style={{ left: n.x, top: n.y }}>
            <div
              className="docnote-bar"
              onPointerDown={(e) => noteDragStart(e, n)}
              onPointerMove={noteDragMove}
              onPointerUp={noteDragEnd}
              title={d.hintText}
            >
              <span aria-hidden="true">✒️</span>
              <button
                className="docnote-x"
                onClick={() => deleteNote(n.id)}
                aria-label={d.toolErase}
                onPointerDown={(e) => e.stopPropagation()}
              >
                ×
              </button>
            </div>
            <textarea
              className="docnote-text"
              value={n.text}
              placeholder={d.notePlaceholder}
              rows={3}
              autoFocus={n.text === ''}
              onChange={(e) =>
                setNotes((prev) => prev.map((m) => (m.id === n.id ? { ...m, text: e.target.value } : m)))
              }
              onPointerDown={(e) => e.stopPropagation()}
            />
          </div>
        ))}
      </div>

      <p className="note">{d.transcription}</p>
    </div>
  )
}
