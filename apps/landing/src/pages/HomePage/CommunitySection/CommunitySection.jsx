import { FaStore, FaBriefcase, FaCode, FaRocket } from 'react-icons/fa'
import './CommunitySection.scss'

const PROFILES = [
    {
        id: 'entrepreneur',
        icon: <FaStore />,
        color: '#2DFF82',
        badge: 'Perfil Estrella',
        title: 'Emprendedores Digitales',
        desc: 'Dueños de negocio que quieren independencia técnica para lanzar y escalar su presencia online sin depender de agencias.',
        featured: true,
        route: 'empresa',
    },
    {
        id: 'career',
        icon: <FaBriefcase />,
        color: '#1FB6FF',
        title: 'Mejora Laboral',
        desc: 'Profesionales que quieren actualizar su stack tecnológico para aspirar a mejores vacantes.',
        featured: false,
        route: 'dev',
    },
    {
        id: 'passionate',
        icon: <FaCode />,
        color: '#DB299B',
        title: 'Apasionados del código',
        desc: 'Personas que ven en la programación una herramienta creativa para dar vida a sus ideas.',
        featured: false,
        route: 'dev',
    },
    {
        id: 'junior',
        icon: <FaRocket />,
        color: '#A78BFA',
        title: 'Nuevos Talentos (Juniors)',
        desc: 'Estudiantes que buscan una base sólida y profesional para entrar con el pie derecho a la industria tech.',
        featured: false,
        route: 'dev',
    },
]

const CommunitySection = () => {
    const featured  = PROFILES.filter(p => p.featured)
    const secondary = PROFILES.filter(p => !p.featured)

    return (
        <section className="audience-section">
            <div className="container">

                <div className="audience-section__header">
                    <span className="audience-section__subtitle">COMUNIDAD</span>
                    <h2 className="audience-section__title">
                        ¿Para quién es<br />
                        <span className="audience-section__title-accent">la Scripteca?</span>
                    </h2>
                    <p className="audience-section__desc">
                        Dos rutas. Un mismo punto de partida.
                    </p>
                </div>

                <div className="audience-grid">

                    {/* Card grande — perfil estrella */}
                    {featured.map(p => (
                        <div
                            key={p.id}
                            className="audience-card audience-card--featured"
                            style={{ '--card-color': p.color }}
                        >
                            <div className="audience-card__glow" aria-hidden="true" />

                            <div className="audience-card__top">
                                <div className="audience-card__icon-wrap">
                                    {p.icon}
                                </div>
                                <span className="audience-card__badge">
                                    ★ {p.badge}
                                </span>
                            </div>

                            {/* Ruta tag */}
                            <span className="audience-card__route audience-card__route--empresa">
                                Ruta Empresa
                            </span>

                            <h3 className="audience-card__title">{p.title}</h3>
                            <p  className="audience-card__desc">{p.desc}</p>

                            {/* Visual decorativo — grid pattern */}
                            <div className="audience-card__grid-deco" aria-hidden="true">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="audience-card__grid-cell" />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Columna de cards secundarias */}
                    <div className="audience-secondary">
                        <div className="audience-secondary__label">
                            <span className="audience-secondary__route-tag">Ruta Dev</span>
                            <span className="audience-secondary__route-desc">
                                También el primer paso de tu carrera técnica
                            </span>
                        </div>

                        {secondary.map((p, i) => (
                            <div
                                key={p.id}
                                className="audience-card audience-card--sm"
                                style={{
                                    '--card-color': p.color,
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            >
                                <div className="audience-card__glow" aria-hidden="true" />

                                <div className="audience-card__icon-wrap audience-card__icon-wrap--sm">
                                    {p.icon}
                                </div>
                                <h3 className="audience-card__title">{p.title}</h3>
                                <p  className="audience-card__desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CommunitySection