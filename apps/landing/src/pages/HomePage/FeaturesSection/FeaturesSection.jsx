import { useEffect, useRef } from 'react'
import './FeaturesSection.scss'

const CODE_LINES = [
  { text: 'const stack = [', color: 'text-primary', delay: 0 },
  { text: "  'React',", color: 'text-green', delay: 400 },
  { text: "  'Node.js',", color: 'text-green', delay: 800 },
  { text: "  'MongoDB',", color: 'text-green', delay: 1200 },
  { text: "  'Express',", color: 'text-green', delay: 1600 },
  { text: '];', color: 'text-primary', delay: 2000 },
  { text: '', color: 'text-primary', delay: 2300 },
  { text: 'function aprender() {', color: 'text-purple', delay: 2600 },
  { text: '  deploy(tu.proyecto);', color: 'text-cyan', delay: 3100 },
  { text: '}', color: 'text-primary', delay: 3600 },
  { text: '', color: 'text-primary', delay: 3900 },
  { text: '// Desde el día 1.', color: 'text-muted', delay: 4100 },
  { text: '// Sin slides.', color: 'text-muted', delay: 4500 },
]

const FOLDER_TREE = [
  { indent: 0, type: 'folder', name: 'src/', icon: '📁' },
  { indent: 1, type: 'folder', name: 'components/', icon: '📂' },
  { indent: 2, type: 'file', name: 'Button.jsx', icon: '⚛' },
  { indent: 2, type: 'file', name: 'Card.jsx', icon: '⚛' },
  { indent: 1, type: 'folder', name: 'hooks/', icon: '📂' },
  { indent: 2, type: 'file', name: 'useAuth.js', icon: '🪝' },
  { indent: 1, type: 'folder', name: 'services/', icon: '📂' },
  { indent: 2, type: 'file', name: 'api.js', icon: '⚡' },
  { indent: 1, type: 'file', name: 'App.jsx', icon: '⚛' },
]

const THREAD = [
  {
    role: 'student',
    avatar: 'M',
    color: '#A78BFA',
    name: 'Michel',
    time: 'hace 2h',
    msg: '¿Por qué usar useCallback aquí y no useMemo?',
  },
  {
    role: 'tutor',
    avatar: 'L',
    color: '#2DFF82',
    name: 'Linus Torvalds · Tutor',
    time: 'hace 1h',
    msg: 'useCallback memoriza la función en sí. useMemo memoriza el resultado. En este caso devuelves una función, así que useCallback es correcto 🎯',
  },
  {
    role: 'student',
    avatar: 'C',
    color: '#1FB6FF',
    name: 'Camila',
    time: 'hace 45min',
    msg: '¡Ahora sí quedó claro! Gracias 🙌',
  },
]

const FeaturesSection = () => {
  const terminalRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const terminal = terminalRef.current
    if (!terminal) return

    let timeouts = []

    const runTerminal = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      timeouts = CODE_LINES.map(({ text, color, delay }) =>
        setTimeout(() => {
          const line = document.createElement('div')
          line.className = `terminal__line terminal__line--${color}`
          line.textContent = text || '\u00A0'
          terminal.appendChild(line)
          terminal.scrollTop = terminal.scrollHeight
        }, delay)
      )
    }

    if (typeof IntersectionObserver === 'undefined') {
      runTerminal()
      return () => timeouts.forEach(clearTimeout)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runTerminal()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(terminal)

    return () => {
      observer.disconnect()
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section className="features-impact" id="metodo">
      <div className="container">

        <div className="features-impact__header">
          <span className="features-impact__subtitle">MÉTODO SCRIPTECA</span>
          <h2 className="features-impact__title">
            El método de desarrollo web<br />
            que te distingue del resto
          </h2>
          <p className="features-impact__desc">
            No declaramos lo que hacemos. Te lo mostramos.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card bento-card--main bento-card--green">
            <div className="bento-card__glow" aria-hidden="true" />

            <div className="bento-card__label">
              <span className="bento-card__tag">01</span>
              Code-First
            </div>

            <div className="bento-card__terminal">
              <div className="terminal__bar">
                <div className="terminal__bar-left">
                  <span className="terminal__dot terminal__dot--red" />
                  <span className="terminal__dot terminal__dot--yellow" />
                  <span className="terminal__dot terminal__dot--green" />
                </div>
                <span className="terminal__bar-title">index.js</span>
              </div>
              <div className="terminal__output" ref={terminalRef} />
              <div className="terminal__cursor" aria-hidden="true" />
            </div>

            <h3 className="bento-card__title">Terminal desde el minuto 1</h3>
            <p className="bento-card__body">
              Sin slides. Sin relleno. La primera clase abres el editor
              y escribes código real que se despliega.
            </p>
          </div>

          <div className="bento-card bento-card--sm bento-card--blue">
            <div className="bento-card__glow" aria-hidden="true" />

            <div className="bento-card__label">
              <span className="bento-card__tag">02</span>
              Estructura Senior
            </div>

            <div className="folder-tree">
              {FOLDER_TREE.map((item, i) => (
                <div
                  key={i}
                  className={`folder-tree__item folder-tree__item--${item.type}`}
                  style={{ paddingLeft: `${item.indent * 16}px`, animationDelay: `${i * 80}ms` }}
                >
                  <span className="folder-tree__icon">{item.icon}</span>
                  <span className="folder-tree__name">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 className="bento-card__title">Arquitectura, no solo sintaxis</h3>
          </div>

          <div className="bento-card bento-card--sm bento-card--pink">
            <div className="bento-card__glow" aria-hidden="true" />

            <div className="bento-card__label">
              <span className="bento-card__tag">03</span>
              Networking Real
            </div>

            <div className="thread">
              {THREAD.map((msg, i) => (
                <div
                  key={i}
                  className={`thread__msg thread__msg--${msg.role}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div
                    className="thread__avatar"
                    style={{ background: `rgba(${hexToRgb(msg.color)}, 0.18)`, color: msg.color, borderColor: `rgba(${hexToRgb(msg.color)}, 0.3)` }}
                  >
                    {msg.avatar}
                  </div>
                  <div className="thread__content">
                    <div className="thread__meta">
                      <span className="thread__name" style={{ color: msg.color }}>{msg.name}</span>
                      <span className="thread__time">{msg.time}</span>
                    </div>
                    <p className="thread__text">{msg.msg}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="bento-card__title">Devs reales, respuestas reales</h3>
          </div>

        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

export default FeaturesSection