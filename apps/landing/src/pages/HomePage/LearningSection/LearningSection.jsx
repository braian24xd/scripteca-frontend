import { FaCheck, FaPlay, FaLock, FaVideo, FaTv, FaFolderOpen, FaComments } from 'react-icons/fa'
import './LearningSection.scss'

const MODULES = [
    { label: 'Fundamentos',    status: 'done'   },
    { label: 'Diseño UI',      status: 'done'   },
    { label: 'Responsive',     status: 'active' },
    { label: 'Integraciones',  status: 'locked' },
    { label: 'SEO',            status: 'locked' },
    { label: 'Deploy final',   status: 'locked' },
]

const PROGRESS = 60 

const BENEFITS = [
    {
        icon: <FaVideo />,
        color: '#2DFF82',
        title: 'Clases en vivo',
        desc: 'Sesiones interactivas en tiempo real con experto. Pregunta y resuelve dudas al momento.',
    },
    {
        icon: <FaTv />,
        color: '#00FFFF',
        title: 'Grabaciones de por vida',
        desc: 'Cada clase queda grabada en tu plataforma. Repasa el contenido cuando lo necesites, para siempre.',
    },
    {
        icon: <FaFolderOpen />,
        color: '#FFC000',
        title: 'Proyectos prácticos',
        desc: 'Construyes tu portafolio mientras aprendes, con casos reales que puedes mostrar.',
    },
    {
        icon: <FaComments />,
        color: '#A78BFA',
        title: 'Comunidad y soporte',
        desc: 'Resuelve dudas con el tutor y conecta con otros alumnos de tu generación.',
    },
]

const StatusIcon = ({ status }) => {
    if (status === 'done')   return <FaCheck aria-hidden="true" />
    if (status === 'active') return <FaPlay aria-hidden="true" />
    return <FaLock aria-hidden="true" />
}

const AccessSection = () => {
    return (
        <section className="access-section">
            <div className="container">

                <div className="access-section__header">
                    <span className="access-section__subtitle">Tu acceso</span>
                    <h2 className="access-section__title">Lo que incluye tu acceso</h2>
                    <p className="access-section__desc">
                        No es solo un curso. Es una plataforma completa que te acompaña.
                    </p>
                </div>

                <div className="access-section__grid">

                    <div className="platform-preview">

                        <div className="platform-preview__top">
                            <span className="platform-preview__course">
                                Web Launchpad · Generación 01
                            </span>
                            <div className="platform-preview__progress">
                                <span className="platform-preview__progress-text">
                                    {PROGRESS}%
                                </span>
                                <div className="platform-preview__progress-bar">
                                    <div
                                        className="platform-preview__progress-fill"
                                        style={{ width: `${PROGRESS}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="platform-preview__body">

                            <div className="platform-preview__modules">
                                {MODULES.map((m, i) => (
                                    <div
                                        key={i}
                                        className={`modules-item ${m.status === 'active' ? 'modules-item--active' : ''}`}
                                    >
                                        <span className={`modules-item__icon modules-item__icon--${m.status}`}>
                                            <StatusIcon status={m.status} />
                                        </span>
                                        <span className={`modules-item__label ${m.status === 'locked' ? 'modules-item__label--locked' : ''}`}>
                                            {m.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="platform-preview__player">
                                <div className="platform-preview__screen">
                                    <div className="platform-preview__play">
                                        <FaPlay aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="platform-preview__lesson-info">
                                    <span className="platform-preview__lesson">
                                        Clase 3.2 — Media queries en la práctica
                                    </span>
                                    <span className="platform-preview__lesson-meta">
                                        24:18 · En vivo grabada
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="access-benefits">
                        {BENEFITS.map((b, i) => (
                            <div
                                key={i}
                                className="benefit"
                                style={{ '--b-color': b.color, animationDelay: `${i * 0.08}s` }}
                            >
                                <div className="benefit__icon">{b.icon}</div>
                                <div className="benefit__content">
                                    <h3 className="benefit__title">{b.title}</h3>
                                    <p  className="benefit__desc">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AccessSection