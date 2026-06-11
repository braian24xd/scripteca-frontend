import {
    FaRocket, FaCheck, FaCalendarAlt, FaClock, FaInfinity,
    FaShieldAlt, FaUsers, FaHeadset, FaArrowRight
} from 'react-icons/fa'
import './CourseSection.scss'

const SPOTS_TOTAL = 15
const SPOTS_TAKEN = 7

const CHECKPOINTS = [
    'Diseño UI/UX moderno y profesional',
    'Deploy en la nube + 1 año de hosting',
    'SEO + WhatsApp + redes integradas',
]

const DURATION_BADGES = [
    { icon: <FaCalendarAlt />, label: '6 semanas' },
    { icon: <FaClock />, label: 'Clases en vivo' },
    { icon: <FaInfinity />, label: 'Acceso de por vida' },
]

const TRUST_SIGNALS = [
    { icon: <FaShieldAlt />, text: 'Garantía de satisfacción 7 días' },
    { icon: <FaUsers />, text: 'Grupos de máximo 15 alumnos' },
    { icon: <FaHeadset />, text: 'Soporte directo con el tutor' },
]

const CourseSection = () => {
    const spotsLeft = SPOTS_TOTAL - SPOTS_TAKEN

    return (
        <section className="course-section">
            <div className="container">
                <div className="course-section__grid">

                    <div className="course-card">

                        <div className="course-card__visual">
                            <div className="screen-mock">
                                <div className="screen-mock__bar">
                                    <span className="screen-mock__dot screen-mock__dot--r" />
                                    <span className="screen-mock__dot screen-mock__dot--y" />
                                    <span className="screen-mock__dot screen-mock__dot--g" />
                                </div>
                                <div className="screen-mock__body">
                                    <div className="screen-mock__line screen-mock__line--lg" />
                                    <div className="screen-mock__line screen-mock__line--md" />
                                    <div className="screen-mock__line screen-mock__line--sm" />
                                    <div className="screen-mock__cta" />
                                    <div className="screen-mock__cards">
                                        <div className="screen-mock__card" />
                                        <div className="screen-mock__card" />
                                        <div className="screen-mock__card" />
                                    </div>
                                </div>
                            </div>
                            <span className="course-card__visual-label">tunegocio.com</span>
                        </div>

                        {/* Contenido */}
                        <div className="course-card__content">
                            <span className="course-card__badge">
                                <FaRocket aria-hidden="true" />
                                Nuevo lanzamiento
                            </span>

                            <h2 className="course-card__title">
                                Web Launchpad:<br />
                                <span className="course-card__title--accent">
                                    Lanza el sitio de tu empresa
                                </span>
                            </h2>

                            <p className="course-card__desc">
                                De cero a sitio profesional desplegado en 6 semanas.
                                Sin agencias, sin depender de nadie.
                            </p>

                            <ul className="course-card__checks" aria-label="Lo que incluye">
                                {CHECKPOINTS.map((text, i) => (
                                    <li key={i} className="course-card__check-item">
                                        <FaCheck aria-hidden="true" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div className="course-card__badges">
                                {DURATION_BADGES.map((b, i) => (
                                    <div key={i} className="course-card__dur-badge">
                                        <span aria-hidden="true">{b.icon}</span>
                                        {b.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="enroll-card">
                        <div className="enroll-card__glow" aria-hidden="true" />

                        {/* Status */}
                        <div className="enroll-card__status">
                            <span className="enroll-card__status-dot" aria-hidden="true" />
                            Inscripciones abiertas
                        </div>

                        {/* Precio */}
                        <div className="enroll-card__price-block">
                            <span className="enroll-card__price-label">Precio de lanzamiento</span>
                            <span className="enroll-card__price" aria-label="Precio: 589 pesos">
                                $589
                            </span>
                            <span className="enroll-card__price-compared">
                                Valor total ~$14,300 MXN
                            </span>
                        </div>

                        {/* Barra de cupos */}
                        <div className="enroll-card__spots" role="meter" aria-valuenow={SPOTS_TAKEN} aria-valuemax={SPOTS_TOTAL} aria-label={`${SPOTS_TAKEN} de ${SPOTS_TOTAL} lugares tomados`}>
                            <div className="enroll-card__spots-header">
                                <span className="enroll-card__spots-text">Lugares disponibles</span>
                                <span className="enroll-card__spots-count">
                                    {spotsLeft} restantes
                                </span>
                            </div>
                            <div className="enroll-card__spots-bar">
                                {Array.from({ length: SPOTS_TOTAL }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`enroll-card__spot ${i < SPOTS_TAKEN ? 'enroll-card__spot--taken' : 'enroll-card__spot--free'}`}
                                    />
                                ))}
                            </div>
                            <span className="enroll-card__spots-sub">
                                {SPOTS_TAKEN} de {SPOTS_TOTAL} lugares tomados
                            </span>
                        </div>

                        <button className="enroll-card__cta">
                            <FaArrowRight aria-hidden="true" />
                            Inscribirme ahora
                        </button>

                        <div className="enroll-card__divider" />

                        {/* Trust signals */}
                        <ul className="enroll-card__trust" aria-label="Garantías">
                            {TRUST_SIGNALS.map((t, i) => (
                                <li key={i} className="enroll-card__trust-item">
                                    <span aria-hidden="true">{t.icon}</span>
                                    {t.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CourseSection