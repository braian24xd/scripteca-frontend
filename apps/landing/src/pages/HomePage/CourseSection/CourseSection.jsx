import {
    FaRocket, FaCheck, FaCalendarAlt, FaClock, FaInfinity,
    FaShieldAlt, FaUsers, FaHeadset, FaArrowRight, FaBell
} from 'react-icons/fa'
import { COURSE, ENROLLMENT_STATUS } from '../../../config/course'
import './CourseSection.scss'

const CHECKPOINTS = [
    'Diseño UI/UX moderno y profesional',
    'Deploy en la nube + 1 año de hosting',
    'SEO + WhatsApp + redes integradas',
]

const DURATION_BADGES = [
    { icon: <FaCalendarAlt />, label: `${COURSE.weeks} semanas` },
    { icon: <FaClock />, label: 'Clases en vivo' },
    { icon: <FaInfinity />, label: 'Acceso de por vida' },
]

const TRUST_SIGNALS = [
    { icon: <FaShieldAlt />, text: 'Garantía de satisfacción 7 días' },
    { icon: <FaUsers />, text: `Grupos de máximo ${COURSE.groupSize} alumnos` },
    { icon: <FaHeadset />, text: 'Soporte directo con el tutor' },
]

const formatOpenDate = (iso) => {
    if (!iso) return null
    const [y, m, d] = iso.split('-').map(Number)
    return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long' })
        .format(new Date(y, m - 1, d))
}

const STATUS_PRESET = {
    [ENROLLMENT_STATUS.OPEN]: {
        statusLabel: 'Inscripciones abiertas',
        showSpotsBar: true,
        cta: { label: 'Inscribirme ahora', icon: <FaArrowRight aria-hidden="true" /> },
    },
    [ENROLLMENT_STATUS.UPCOMING]: {
        statusLabel: 'Próximamente',
        showSpotsBar: false,
        cta: { label: 'Avísame cuando abra', icon: <FaBell aria-hidden="true" /> },
    },
    [ENROLLMENT_STATUS.CLOSED]: {
        statusLabel: 'Inscripciones cerradas',
        showSpotsBar: true,
        cta: { label: 'Avísame del próximo grupo', icon: <FaBell aria-hidden="true" /> },
    },
}

const CourseSection = () => {
    const status = COURSE.enrollmentStatus
    const preset = STATUS_PRESET[status] ?? STATUS_PRESET[ENROLLMENT_STATUS.UPCOMING]
    const isClosed = status === ENROLLMENT_STATUS.CLOSED

    const filled = isClosed ? COURSE.spotsTotal : COURSE.spotsTaken
    const remaining = COURSE.spotsTotal - filled
    const opensLabel = formatOpenDate(COURSE.enrollmentOpensAt)

    return (
        <section className="course-section" id="curso">
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

                        <div className="course-card__content">
                            <span className="course-card__badge">
                                <FaRocket aria-hidden="true" />
                                Nuevo lanzamiento
                            </span>

                            <h2 className="course-card__title">
                                {COURSE.name}:<br />
                                <span className="course-card__title--accent">
                                    Lanza el sitio de tu empresa
                                </span>
                            </h2>

                            <p className="course-card__desc">
                                De cero a sitio profesional desplegado en {COURSE.weeks} semanas.
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

                    <div className={`enroll-card enroll-card--${status}`}>
                        <div className="enroll-card__glow" aria-hidden="true" />

                        <div className="enroll-card__status">
                            <span className="enroll-card__status-dot" aria-hidden="true" />
                            {preset.statusLabel}
                        </div>

                        <div className="enroll-card__price-block">
                            <span className="enroll-card__price-label">Precio de lanzamiento</span>
                            <span className="enroll-card__price" aria-label={`Precio: ${COURSE.price} pesos`}>
                                ${COURSE.price}
                            </span>
                            <span className="enroll-card__price-compared">
                                Valor total ~${COURSE.fullValue.toLocaleString('es-MX')} {COURSE.currency}
                            </span>
                        </div>

                        {preset.showSpotsBar ? (
                            <div
                                className="enroll-card__spots"
                                role="meter"
                                aria-valuenow={filled}
                                aria-valuemax={COURSE.spotsTotal}
                                aria-label={`${filled} de ${COURSE.spotsTotal} lugares tomados`}
                            >
                                <div className="enroll-card__spots-header">
                                    <span className="enroll-card__spots-text">Lugares disponibles</span>
                                    <span className="enroll-card__spots-count">
                                        {isClosed ? 'Cupo lleno' : `${remaining} restantes`}
                                    </span>
                                </div>
                                <div className="enroll-card__spots-bar">
                                    {Array.from({ length: COURSE.spotsTotal }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`enroll-card__spot ${i < filled ? 'enroll-card__spot--taken' : 'enroll-card__spot--free'}`}
                                        />
                                    ))}
                                </div>
                                <span className="enroll-card__spots-sub">
                                    {isClosed
                                        ? 'Grupo completo'
                                        : `${filled} de ${COURSE.spotsTotal} lugares tomados`}
                                </span>
                            </div>
                        ) : (
                            <div className="enroll-card__upcoming">
                                <div className="enroll-card__upcoming-row">
                                    <FaCalendarAlt aria-hidden="true" />
                                    {opensLabel ? (
                                        <span>
                                            Inscripciones abren el{' '}
                                            <span className="enroll-card__upcoming-date">{opensLabel}</span>
                                        </span>
                                    ) : (
                                        <span>Fecha de apertura muy pronto</span>
                                    )}
                                </div>
                                <div className="enroll-card__upcoming-row">
                                    <FaUsers aria-hidden="true" />
                                    <span>{COURSE.groups} grupos · máximo {COURSE.groupSize} por grupo</span>
                                </div>
                            </div>
                        )}

                        <a type="button" className="enroll-card__cta" href={!preset.statusLabel.includes('Próximamente') ? '#inscripcion' : '#contacto'}>
                            {preset.cta.icon}
                            {preset.cta.label}
                        </a>

                        <div className="enroll-card__divider" />

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