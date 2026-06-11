import { FaCheck, FaRocket } from 'react-icons/fa'
import './RoadmapSection.scss'

const WEEKS = [
    {
        week: 'Semana 1',
        level: 1,
        title: 'Entorno, fundamentos y tu primer deploy',
        desc: 'Configuras tu entorno de trabajo, aprendes la estructura base y haces tu primer deploy real desde el día 1.',
        deliverable: 'Tu repo en GitHub',
    },
    {
        week: 'Semana 2',
        level: 2,
        title: 'Estructura visual y diseño UI',
        desc: 'Aplicas principios reales de UI/UX para diseñar las páginas de tu sitio. Maquetación profesional con CSS moderno.',
        deliverable: 'Tu diseño maquetado',
    },
    {
        week: 'Semana 3',
        level: 3,
        title: 'Interactividad y responsive',
        desc: 'Tu sitio se adapta a cualquier pantalla. Añades interacciones, animaciones sutiles y componentes reutilizables.',
        deliverable: 'Sitio responsive funcional',
    },
    {
        week: 'Semana 4',
        level: 4,
        title: 'Integraciones: WhatsApp, redes y formularios',
        desc: 'Conectas tu sitio con el mundo real: formulario de contacto, botón WhatsApp Business y links a tus redes sociales.',
        deliverable: 'Formulario en producción',
    },
    {
        week: 'Semana 5',
        level: 5,
        title: 'SEO técnico y optimización',
        desc: 'Configuras meta tags, velocidad de carga, estructura semántica y Google Search Console para que tu sitio sea encontrado.',
        deliverable: 'Indexado en Google',
    },
    {
        week: 'Semana 6 · Lanzamiento',
        level: 6,
        title: 'Deploy final + asesoramiento personalizado',
        desc: 'Tu sitio se publica con dominio propio y hosting activo. Sesión 1:1 para planear los siguientes pasos de tu presencia digital.',
        deliverable: 'Tu sitio en producción',
        isFinal: true,
    },
]

const RoadmapSection = () => {
    return (
        <section className="roadmap-section">
            <div className="container">

                <div className="roadmap-section__header">
                    <span className="roadmap-section__subtitle">El proceso</span>
                    <h2 className="roadmap-section__title">
                        Tu camino, semana a semana
                    </h2>
                    <p className="roadmap-section__desc">
                        6 semanas. Un sitio desplegado. Sin improvisación.
                    </p>
                </div>

                <div className="roadmap-timeline">
                    {WEEKS.map((w, i) => {
                        const isLast = i === WEEKS.length - 1
                        return (
                            <div
                                key={i}
                                className={`roadmap-step ${w.isFinal ? 'roadmap-step--final' : ''}`}
                                style={{ '--level': w.level, animationDelay: `${i * 0.08}s` }}
                            >
                                <div className="roadmap-step__left">
                                    <div
                                        className="roadmap-step__node"
                                        data-level={w.level}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    {!isLast && <div className="roadmap-step__line" />}
                                </div>

                                <div className="roadmap-step__card">
                                    <span className="roadmap-step__week">{w.week}</span>
                                    <h3 className="roadmap-step__title">{w.title}</h3>
                                    <p className="roadmap-step__desc">{w.desc}</p>
                                    <div className="roadmap-step__tag">
                                        {w.isFinal
                                            ? <FaRocket aria-hidden="true" />
                                            : <FaCheck aria-hidden="true" />}
                                        {w.deliverable}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default RoadmapSection