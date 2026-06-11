// import './Footer.scss'
// import logo from '@assets/logo.png';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const PublicFooter = () => {

//     return (
//         <footer>
//             <section className="footer-content">
//                 <section id="footer-mark">
//                     <img src={logo} alt="logo" width="100px" />
//                     <p>
//                         Educación de alto rendimiento para quienes no se conforman con lo básico. En Scripteca HUB, transformamos el aprendizaje en activos digitales reales. El sistema está listo, solo faltas tú.
//                     </p>
//                     <section id="social-links">
//                         <a href="https://www.facebook.com/profile.php?id=61573641520695"><FaFacebookF /></a>
//                         <a href="https://www.instagram.com/scripteca/"><FaInstagram /></a>
//                         <a href="https://www.youtube.com/@Scripteca"><FaYoutube /></a>
//                         <a href="#"><FaTiktok /></a>
//                         <a href="#"><FaLinkedin /></a>
//                         <a href="#"><FaGithub /></a>
//                     </section>
//                 </section>
//                 <section className="footer-link">
//                     <h2>Navegación</h2>
//                     <a href="#inicio">Inicio</a>
//                     <a href="#cursos">Cursos</a>
//                     <a href="#propuesta">Propuesta de aprendizaje</a>
//                 </section>
//                 <section className="footer-link">
//                     <h2>Sitio</h2>
//                     <a>Contacto</a>
//                     <a>Mapa del sitio</a>
//                 </section>
//             </section>
//             <hr />
//             <section id="footer-copy">
//                 <small>Copyright &copy;2024. Todos los derechos reservados</small>
//                 <small>
//                     <a>Política de privacidad</a>
//                     <a>Aspectos legales</a>
//                     <a>Política de cookies</a>
//                 </small>
//             </section>
//         </footer>
//     )
// }

// export default PublicFooter

import { useState } from 'react'
import {
    FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn, FaGithub,
    FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCompass, FaBook, FaCheck
} from 'react-icons/fa'
import './Footer.scss'

// ─── Data ─────────────────────────────────────────────────────
const SOCIALS = [
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
    { icon: <FaYoutube />,   label: 'YouTube',   url: '#' },
    { icon: <FaTiktok />,    label: 'TikTok',    url: '#' },
    { icon: <FaLinkedinIn />,label: 'LinkedIn',  url: '#' },
    { icon: <FaGithub />,    label: 'GitHub',    url: '#' },
]

const NAV_LINKS = [
    { label: 'Inicio',          href: '#inicio'    },
    { label: 'Cursos',          href: '#cursos'    },
    { label: 'Método',          href: '#metodo'    },
    { label: 'Para quién es',   href: '#audiencia' },
]

const RESOURCE_LINKS = [
    { label: 'Web Launchpad', href: '#curso', badge: 'Activo' },
    { label: 'Blog',          href: '#blog'      },
    { label: 'Comunidad',     href: '#comunidad' },
    { label: 'Preguntas frecuentes', href: '#faq' },
]

const CONTACT_LINKS = [
    { icon: <FaWhatsapp />,      label: 'WhatsApp',       href: '#', color: '#25D366' },
    { icon: <FaEnvelope />,      label: 'Correo',         href: 'mailto:hola@scripteca.com' },
    { icon: <FaMapMarkerAlt />,  label: 'Edo. de México', href: '#' },
]

const LEGAL_LINKS = [
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Términos',   href: '#terminos'   },
    { label: 'Cookies',    href: '#cookies'    },
]

// ─── Email capture handler ────────────────────────────────────
// TODO: reemplazar EMAIL_ENDPOINT por el endpoint real de la API
// de La Scripteca cuando se conecte a Mongo + servicio de correo.
const EMAIL_ENDPOINT = '/api/newsletter/subscribe'

const Footer = () => {
    const [email, setEmail]   = useState('')
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || status === 'loading') return

        // Validación básica de formato
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (!isValid) {
            setStatus('error')
            return
        }

        setStatus('loading')
        try {
            const res = await fetch(EMAIL_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'footer_landing' }),
            })
            if (!res.ok) throw new Error('Request failed')
            setStatus('success')
            setEmail('')
        } catch {
            setStatus('error')
        }
    }

    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-capture">
                    <div className="footer-capture__glow" aria-hidden="true" />

                    <div className="footer-capture__text">
                        <p className="footer-capture__title">¿Aún no es tu momento?</p>
                        <p className="footer-capture__desc">
                            Déjanos tu correo y te avisamos cuando abra la próxima generación.
                        </p>
                    </div>

                    <form className="footer-capture__form" onSubmit={handleSubmit}>
                        {status === 'success' ? (
                            <div className="footer-capture__success">
                                <FaCheck aria-hidden="true" />
                                Listo, te avisaremos.
                            </div>
                        ) : (
                            <>
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

                {/* ── Grid principal ── */}
                <div className="footer-grid">

                    {/* Marca */}
                    <div className="footer-brand">
                        <a href="#inicio" className="footer-brand__logo">
                            <span className="footer-brand__mark">S</span>
                            <span className="footer-brand__name">
                                Scripteca <span>HUB</span>
                            </span>
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

                    {/* Navegación */}
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

                    {/* Recursos */}
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

                    {/* Contacto */}
                    <div className="footer-col">
                        <p className="footer-col__title">
                            <FaEnvelope aria-hidden="true" /> Contacto
                        </p>
                        <nav className="footer-col__links">
                            {CONTACT_LINKS.map((l, i) => (
                                <a key={i} href={l.href} className="footer-link footer-link--icon">
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

                {/* ── Barra inferior ── */}
                <div className="footer-bottom">
                    <span className="footer-copy">
                        © {new Date().getFullYear()} Scripteca HUB. Todos los derechos reservados.
                    </span>

                    <div className="footer-status">
                        <span className="footer-status__dot" aria-hidden="true" />
                        Inscripciones abiertas
                    </div>

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