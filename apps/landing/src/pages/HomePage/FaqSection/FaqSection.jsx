import { useState, useEffect } from 'react'
import Badge from '@scripteca/ui/Badge'
import './FaqSection.scss'

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 75 : 150)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return (
    <span className="typewriter-text">
      {words[index].substring(0, subIndex)}
      <span className="cursor"></span>
    </span>
  )
}

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const questions = [
        {
            q: "¿Necesito conocimientos previos?",
            a: "Para el curso Web Launchpad empezamos desde cero absoluto. Solo necesitas una computadora y ganas de aprender."
        },
        {
            q: "¿El acceso es de por vida?",
            a: "¡Afirmativo! Una vez que te inscribes, el contenido y todas sus futuras actualizaciones son tuyos para siempre."
        },
        {
            q: "¿Qué pasa si tengo dudas durante el curso?",
            a: "Tendrás acceso a nuestra comunidad privada en Discord donde expertos y otros alumnos te ayudarán a resolver cualquier bug."
        }
    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const words = ["empresa", "carrera", "proyecto"]

    return (
        <>
            <section className="faq" id="faq">
                <div className="container">
                    <div className="faq__header">
                        <span className="faq__header--subtitle">TERMINAL DE AYUDA</span>
                        <h2 className="faq__header--title">Preguntas Frecuentes</h2>
                    </div>

                    <div className="faq-list">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{item.q}</h3>
                                    <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="final-cta">
                <div className="cta-content">
                    <Badge variant="cyan">Sistema listo</Badge>
                    <h2>¿Listo para escribir el futuro de tu <Typewriter words={words} />?</h2>
                    <p>
                        Únete a la Scripteca y domina las herramientas que definen la
                        industria hoy.
                    </p>
                    <button className="btn-glitch">
                        COMENZAR MI RUTA <i className="fa-solid fa-rocket"></i>
                    </button>
                </div>
                <div className="cta-glow"></div>
            </section>
        </>
    );
};

export default FaqSection