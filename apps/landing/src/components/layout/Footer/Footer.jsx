import { useState } from 'react'
import {
    FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn, FaGithub,
    FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCompass, FaBook, FaCheck
} from 'react-icons/fa'
import './Footer.scss'
import logo from '@assets/scripteca.png'

const SOCIALS = [
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
    { icon: <FaYoutube />, label: 'YouTube', url: '#' },
    { icon: <FaTiktok />, label: 'TikTok', url: '#' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', url: '#' },
    { icon: <FaGithub />, label: 'GitHub', url: '#' },
]

const NAV_LINKS = [
    { label: 'Inicio', href: '#banner' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Método', href: '#metodo' },
    { label: 'Para quién es', href: '#para-quien' },
]

const RESOURCE_LINKS = [
    { label: 'Web Launchpad', href: '#curso', badge: 'Proximamente' },
    { label: 'Blog', href: '#blog' },
    { label: 'Comunidad', href: '#comunidad' },
    { label: 'Preguntas frecuentes', href: '#faq' },
]

const CONTACT_LINKS = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/525536647556?text=%C2%A1Hola!%20tengo%20una%20consulta%20sobre...', color: '#25D366' },
    { icon: <FaEnvelope />, label: 'contacto@scripteca.com', href: 'mailto:contacto@scripteca.com' },
    { icon: <FaMapMarkerAlt />, label: 'Edo. de México', href: '#' },
]

const LEGAL_LINKS = [
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Términos', href: '#terminos' },
    { label: 'Cookies', href: '#cookies' },
]

const API_URL = import.meta.env.VITE_PRODUCTION_API_URL || "http://localhost:5000";
const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !name || status === 'loading') return

        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (!isValid) {
            setStatus('error')
            return
        }

        setStatus('loading')
        try {
            const res = await fetch(`${API_URL}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, source: 'footer_landing' }),
            })
            if (res.status === 400) {
                setStatus('already')
                setEmail('')
                setName('')
                return
            }
            if (!res.ok) throw new Error('Request failed')
            setStatus('success')
            setEmail('')
            setName('')
        } catch {
            setStatus('error')
        }
    }

    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-capture" id="contacto">
                    <div className="footer-capture__glow" aria-hidden="true" />

                    <div className="footer-capture__text">
                        <p className="footer-capture__title">¿Aún no es tu momento?</p>
                        <p className="footer-capture__desc">
                            Déjanos tu nombre, correo y te avisamos cuando abra la próxima generación.
                        </p>
                    </div>

                    <form className="footer-capture__form" onSubmit={handleSubmit}>
                        {status === 'success' ? (
                            <div className="footer-capture__success">
                                <FaCheck aria-hidden="true" />
                                Listo, te avisaremos.
                            </div>
                        ) : status === 'already' ? (
                            <div className="footer-capture__success">
                                <FaEnvelope aria-hidden="true" />
                                Este correo ya está registrado.
                            </div>
                        ) : (
                            <>  
                                <input 
                                    type="name"
                                    className={`footer-capture__input ${status === 'error' ? 'footer-capture__input--error' : ''}`}
                                    placeholder="Tu nombre"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                        if (status === 'error') setStatus('idle')
                                    }}
                                    aria-label="Tu nombre"
                                />
                                <input
                                    type="email"
                                    className={`footer-capture__input ${status === 'error' ? 'footer-capture__input--error' : ''}`}
                                    placeholder="tu@correo.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        if (status === 'error') setStatus('idle')
                                    }}
                                    aria-label="Tu correo electrónico"
                                />
                                <button
                                    type="submit"
                                    className="footer-capture__btn"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Enviando…' : 'Avisarme'}
                                </button>
                            </>
                        )}
                    </form>
                </div>

                <div className="footer-grid">

                    <div className="footer-brand">
                        <a href="#inicio" className="footer-brand__logo">
                            <img src={logo} alt="La Scripteca" width="180" />
                        </a>
                        <p className="footer-brand__desc">
                            Educación de alto rendimiento para quienes no se conforman con
                            lo básico. Transformamos el aprendizaje en activos digitales reales.
                            El sistema está listo, solo faltas tú.
                        </p>
                        <div className="footer-brand__social">
                            {SOCIALS.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    className="footer-social-icon"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <p className="footer-col__title">
                            <FaCompass aria-hidden="true" /> Navegación
                        </p>
                        <nav className="footer-col__links">
                            {NAV_LINKS.map((l, i) => (
                                <a key={i} href={l.href} className="footer-link">{l.label}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-col">
                        <p className="footer-col__title">
                            <FaBook aria-hidden="true" /> Recursos
                        </p>
                        <nav className="footer-col__links">
                            {RESOURCE_LINKS.map((l, i) => (
                                <a key={i} href={l.href} className="footer-link">
                                    {l.label}
                                    {l.badge && <span className="footer-badge">{l.badge}</span>}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-col">
                        <p className="footer-col__title">
                            <FaEnvelope aria-hidden="true" /> Contacto
                        </p>
                        <nav className="footer-col__links">
                            {CONTACT_LINKS.map((l, i) => (
                                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link footer-link--icon">
                                    <span
                                        className="footer-link__icon"
                                        style={l.color ? { color: l.color } : undefined}
                                        aria-hidden="true"
                                    >
                                        {l.icon}
                                    </span>
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <span className="footer-copy">
                        © {new Date().getFullYear()} Scripteca HUB. Todos los derechos reservados.
                    </span>

                    {/* <div className="footer-status">
                        <span className="footer-status__dot" aria-hidden="true" />
                        Inscripciones abiertas
                    </div> */}

                    <div className="footer-legal">
                        {LEGAL_LINKS.map((l, i) => (
                            <a key={i} href={l.href}>{l.label}</a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer