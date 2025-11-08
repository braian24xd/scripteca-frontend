import { useState } from "react";
import { Link } from "react-router";

import logo from '../../assets/img/logo.png'
import scripteca from '../../assets/img/scripteca.png';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FcIdea } from "react-icons/fc";


import Card from "../../components/ui/Card";


const PreRegisterPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="" />
                    <button className="btn-close" onClick={() => setSidebarOpen(false)}>×</button>
                </div>
                <nav>
                    <a href="#inicio">Inicio</a>
                    <a href="#cursos">Cursos</a>
                    <a href="#propuesta">Propuesta de aprendizaje</a>
                </nav>
                <div className="btn-container">
                    <Link to="/login">Entrar</Link>
                    <Link className="btn-login" href="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..." target="_blank">Contacto</Link>
                </div>
                <section className="sidebar-footer">
                    <section className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61573641520695"><FaFacebook /></a>
                        <a href="https://www.instagram.com/scripteca/"><img alt="Instagram icon" /></a>
                        <a href="https://www.youtube.com/@Scripteca"><img alt="Youtube icon" /></a>
                        <a><img alt="X Twitter icon" /></a>
                        <a><img alt="Github icon" /></a>
                    </section>
                </section>
            </aside>

            {/* Header */}
            <div className="pulse-box-shadow" id="inicio">
                <header className="landing__header" id="header">
                    <div className="justify-content-center">
                        <img src={scripteca} alt="Logo" width="200px" />
                    </div>
                    <nav className="desktop-nav">
                        <a href="#inicio">Inicio</a>
                        <a href="#cursos">Cursos</a>
                        <a href="#propuesta">Propuesta de aprendizaje</a>
                    </nav>
                    <div className="btn-group-header">
                        <div className="btn-container">
                            <Link to="/login" className="btn-login">Entrar</Link>
                            <Link className="btn-login" to="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..." target="_blank">Contacto</Link>
                        </div>
                        <div className="hamburger" onClick={() => setSidebarOpen(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
            </div>
            <section className="register container">
                <section className="register__banner">
                    <div>
                        <h1 className="register__banner--title">Aprende a crear el sitio web de tu negocio como un profesional</h1>
                        <p className="register__banner--caption">
                            Inscríbete al curso práctico donde aprenderás paso a paso a construir tu página web moderna, atractiva y funcional
                            sin necesidad de experiencia previa 🚀
                        </p>
                        <button className="register__banner--cta">
                            <span>Pre-registrate grátis</span>
                        </button>
                    </div>
                    <img className="register__banner--img" src={logo} alt="" />
                </section>
                <section className="register__benefits">
                    <h2>Beneficios del curso</h2>
                    <article className="glassCard--single">
                        {/**aqui va el icono-componente de fa, lucide, etc */}
                        <h4>Aprende desde cero</h4>
                    </article>
                    <article className="glassCard--single">
                        {/**aqui va el icono-componente de fa, lucide, etc */}
                        <h4>Curso 100% práctico</h4>
                    </article>
                    <article className="glassCard--single">
                        {/**aqui va el icono-componente de fa, lucide, etc */}
                        <h4>Acceso a recursos de aprendizaje</h4>
                    </article>
                    <article className="glassCard--single">
                        {/**aqui va el icono-componente de fa, lucide, etc */}
                        <h4>Crea tu sitio profesional</h4>
                    </article>
                </section>
                <section className="register__roadmap">
                    <h2>Qué aprenderás</h2>
                    <div className="card__container">
                        <Card>
                            <FcIdea />
                            <h4>Diseño web moderno</h4>
                        </Card>
                        <Card>
                            <FcIdea />
                            <h4>Construcción paso a paso</h4>
                        </Card>
                        <Card>
                            <FcIdea />
                            <h4>Optimización y publicación</h4>
                        </Card>
                        <Card>
                            <FcIdea />
                            <h4>Branding digital y conversión</h4>
                        </Card>
                    </div>
                </section>
                <div className="doubleColumn">
                    <section className="register__testimonials">
                        <section className="testimonials__content">
                            Gracias a este curso, pude lanzar la web de mi negocio en solo 2 semanas
                        </section>
                        <section>
                            <p>Alejandro G.</p>
                            <small>Estudiante de la Scripteca. Primera Gen.</small>
                        </section>
                    </section>
                    <section className="register__form">
                        <form>
                            <input type="text" placeholder="Nombre" />
                            <input type="text" placeholder="Apellidos" />
                            <input type="email" placeholder="Correo electrónico" />
                            <input type="tel" placeholder="Telefono" />
                            <button>
                                <span>
                                    Unirme a la lista de espera
                                </span>
                            </button>
                        </form>
                    </section>
                </div>
            </section>
            {/* Footer */}
            <footer className="pulse-box-shadow">
                <section className="footer-content">
                    <section id="footer-mark">
                        <img src={logo} alt="logo" width="100px" />
                        <p>
                            Educación a tu alcance, donde y cuando quieras.
                            Impulsa tu carrera con nuestros cursos especializados por menos de un café al día.
                        </p>
                        <section id="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61573641520695"><FaFacebook /></a>
                            <a href="https://www.instagram.com/scripteca/"><FaInstagram /></a>
                            <a href="https://www.youtube.com/@Scripteca"><FaYoutube /></a>
                            <a><FaXTwitter /></a>
                            <a><FaGithub /></a>
                        </section>
                    </section>
                    <section className="footer-link">
                        <h2>Navegación</h2>
                        <a href="#inicio">Inicio</a>
                        <a href="#cursos">Cursos</a>
                        <a href="#propuesta">Propuesta de aprendizaje</a>
                    </section>
                    <section className="footer-link">
                        <h2>Sitio</h2>
                        <a>Contacto</a>
                        <a>Mapa del sitio</a>
                    </section>
                </section>
                <hr />
                <section id="footer-copy">
                    <small>Copyright &copy;2024. Todos los derechos reservados</small>
                    <small>
                        <a>Política de privacidad</a>
                        <a>Aspectos legales</a>
                        <a>Política de cookies</a>
                    </small>
                </section>
            </footer>
        </>
    )
}

export default PreRegisterPage