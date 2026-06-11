import { useState } from 'react'
import './DeliverableSection.scss'
import Button from '@scripteca/ui/Button'
import { FaCheckCircle, FaGlobe, FaSearch, FaWhatsapp, FaBriefcase, FaStar } from 'react-icons/fa'

const OUTPUT_TYPES = [
    {
        id: 'landing',
        label: 'Landing Page',
        tag: 'Ideal para validar tu negocio',
        color: '#2DFF82',
        sections: [
            { type: 'nav', height: 28 },
            { type: 'hero', height: 80, accent: true },
            { type: 'cards', height: 52, cols: 3 },
            { type: 'cta', height: 44, accent: true },
            { type: 'footer', height: 28 },
        ],
    },
    {
        id: 'empresa',
        label: 'Home de Empresa',
        tag: 'Para negocios con servicios',
        color: '#1FB6FF',
        sections: [
            { type: 'nav', height: 28 },
            { type: 'hero-img', height: 72, accent: true },
            { type: 'cards', height: 52, cols: 3 },
            { type: 'about', height: 64 },
            { type: 'footer', height: 28 },
        ],
    },
    {
        id: 'portfolio',
        label: 'Portafolio Dev',
        tag: 'Para devs que buscan empleo',
        color: '#A78BFA',
        sections: [
            { type: 'nav', height: 28 },
            { type: 'profile', height: 64, accent: true },
            { type: 'projects', height: 80, cols: 2 },
            { type: 'skills', height: 36 },
            { type: 'footer', height: 28 },
        ],
    },
]

const DELIVERABLES = [
    {
        icon: <FaGlobe />,
        color: '#2DFF82',
        title: '1 año de hosting incluido',
        value: '~$1,800 MXN',
        desc: 'Dominio y alojamiento listos desde el día del deploy.',
    },
    {
        icon: <FaStar />,
        color: '#1FB6FF',
        title: 'Diseño UI/UX profesional',
        value: '~$8,000 MXN',
        desc: 'Sitio construido con principios reales de diseño moderno.',
    },
    {
        icon: <FaSearch />,
        color: '#FFC000',
        title: 'SEO técnico optimizado',
        value: '~$2,500 MXN',
        desc: 'Meta tags, velocidad, estructura semántica y más.',
    },
    {
        icon: <FaWhatsapp />,
        color: '#25D366',
        title: 'WhatsApp + redes integradas',
        value: '~$800 MXN',
        desc: 'Botón de contacto directo y links a todas tus plataformas.',
    },
    {
        icon: <FaBriefcase />,
        color: '#A78BFA',
        title: 'Mini portafolio del curso',
        value: 'Priceless',
        desc: 'Proyectos reales que evidencian tu aprendizaje.',
    },
    {
        icon: <FaCheckCircle />,
        color: '#DB299B',
        title: 'Sesión de asesoramiento final',
        value: '~$1,200 MXN',
        desc: 'Revisión personalizada y hoja de ruta para seguir creciendo.',
    },
]

const TOTAL_VALUE = '$14,300'
const COURSE_PRICE = '$589'

const BrowserMockup = ({ type }) => {

    return (
        <div className="browser-mockup">
            <div className="browser-mockup__header">
                <div className="browser-mockup__header__dots">
                    <span className="dot dot--red"></span>
                    <span className="dot dot--yellow"></span>
                    <span className="dot dot--green"></span>
                </div>
                <div className="browser-mockup__header__url">
                    <div className="browser-mockup__header__url__icon">
                        <FaGlobe />
                    </div>
                    <div className="browser-mockup__header__url__text">
                        www.scripteca.com/mi-sitio
                    </div>
                </div>
            </div>
            <div className="browser-mockup__content">
                {type.sections.map((sec, i) => (
                    <WireframeSection key={i} section={sec} color={type.color} />
                ))}
            </div>
        </div>
    )
}

const WireframeSection = ({ section, color }) => {
    const { type, height, accent, cols } = section
    const baseStyle = { height }

    switch (type) {
        case 'nav':
            return (
                <div className="wf-section wf-nav" style={baseStyle}>
                    <div className="wf-nav__logo" style={{ background: color }} />
                    <div className="wf-nav__links">
                        {[60, 50, 70].map((w, i) => (
                            <div key={i} className="wf-block" style={{ width: w }} />
                        ))}
                    </div>
                    <div className="wf-btn" style={{ borderColor: color, color }} />
                </div>
            )
        case 'hero':
        case 'hero-img':
            return (
                <div className="wf-section wf-hero" style={{ ...baseStyle, borderColor: accent ? `${color}30` : undefined }}>
                    <div className="wf-hero__text">
                        <div className="wf-block wf-block--lg" style={{ background: accent ? color : undefined }} />
                        <div className="wf-block wf-block--md" />
                        <div className="wf-block wf-block--md" />
                        <div className="wf-btn-solid" style={{ background: color }} />
                    </div>
                    {type === 'hero-img' && (
                        <div className="wf-hero__img" style={{ borderColor: `${color}40` }} />
                    )}
                </div>
            )
        case 'profile':
            return (
                <div className="wf-section wf-profile" style={{ ...baseStyle, borderColor: `${color}25` }}>
                    <div className="wf-profile__avatar" style={{ borderColor: color }} />
                    <div className="wf-profile__info">
                        <div className="wf-block wf-block--lg" style={{ background: color }} />
                        <div className="wf-block wf-block--md" />
                        <div className="wf-social">
                            {[0, 1, 2].map(i => (
                                <div key={i} className="wf-social__icon" style={{ borderColor: `${color}50` }} />
                            ))}
                        </div>
                    </div>
                </div>
            )
        case 'cards':
        case 'projects':
            return (
                <div className="wf-section wf-cards" style={baseStyle}>
                    {Array.from({ length: cols || 3 }).map((_, i) => (
                        <div key={i} className="wf-card" style={{ borderColor: `${color}20` }}>
                            <div className="wf-card__icon" style={{ background: `${color}20` }} />
                            <div className="wf-block" />
                            <div className="wf-block wf-block--sm" />
                        </div>
                    ))}
                </div>
            )
        case 'about':
            return (
                <div className="wf-section wf-about" style={baseStyle}>
                    <div className="wf-about__img" style={{ borderColor: `${color}30` }} />
                    <div className="wf-about__text">
                        {[80, 100, 90, 70].map((w, i) => (
                            <div key={i} className="wf-block" style={{ width: `${w}%` }} />
                        ))}
                    </div>
                </div>
            )
        case 'skills':
            return (
                <div className="wf-section wf-skills" style={baseStyle}>
                    {[0, 1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="wf-skill-badge" style={{ borderColor: `${color}30`, color }} />
                    ))}
                </div>
            )
        case 'cta':
            return (
                <div className="wf-section wf-cta" style={{ ...baseStyle, background: `${color}08` }}>
                    <div className="wf-block wf-block--lg" />
                    <div className="wf-btn-solid wf-btn-solid--lg" style={{ background: color }} />
                </div>
            )
        case 'footer':
            return (
                <div className="wf-section wf-footer" style={baseStyle}>
                    <div className="wf-footer__logo" />
                    <div className="wf-footer__links">
                        {[0, 1, 2].map(i => <div key={i} className="wf-block wf-block--sm" />)}
                    </div>
                </div>
            )
        default:
            return <div className="wf-section" style={baseStyle} />
    }
}

const DeliverableSection = () => {

    const [selected, setSelected] = useState(OUTPUT_TYPES[0])

    return (
        <article className="deliverable-section container">
            <section className="deliverable-section__header">
                <p className="deliverable-section__header__subtitle">LO QUE VAS A CONSTRUIR</p>
                <h2 className="deliverable-section__header__title">
                    Tu sitio web lanzado<br />
                    <span className="deliverable-section__header__title--accent" style={{ color: selected.color }}>
                        en 6 semanas
                    </span>
                </h2>
                <p className="deliverable-section__header__desc">
                    Elige el tipo de sitio que quieres construir en el curso:
                </p>
            </section>
            <section className="deliverable-section__options">
                {OUTPUT_TYPES.map((option, index) => {
                    return (
                        <Button
                            key={option.id}
                            variant={option.id === selected.id ? 'sub' : 'ghost'}
                            onClick={() => setSelected(OUTPUT_TYPES[index])}
                        >
                            {option.label}
                        </Button>
                    )
                })}
            </section>
            <p className="deliverable-section__tag" style={{ color: selected.color }}>
                {selected.tag}
            </p>
            <section className="deliverable-section__content">
                <BrowserMockup type={selected} />
                <section className="deliverable-section__content__list">
                    <span className="deliverable-section__content__list__label">Todo lo que incluye: </span>
                    <div className="deliverable-section__content__list__items">
                        {DELIVERABLES.map((item, index) => {
                            return (
                                <section key={index} className="deliverable-section__content__list__item">
                                    <div className="deliverable-section__content__list__item--icon" style={{ color: item.color, animationDelay: `${index * 0.06}s` }}>
                                        {item.icon}
                                    </div>
                                    <div className="deliverable-section__content__list__item--content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="deliverable-section__content__list__item--value">
                                        <span>{item.value}</span>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                    <section className="deliverable-section__content__list__total">
                        <div className="deliverable-section__content__list__total--value">
                            <p>Valor total estimado</p>
                            <span>{TOTAL_VALUE} MXN</span>
                        </div>
                        <div className="deliverable-section__content__list__total--price">
                            <p>Tu inversión hoy</p>
                            <span>{COURSE_PRICE}</span>
                        </div>
                    </section>
                </section>
            </section>
        </article>
    )
}

export default DeliverableSection