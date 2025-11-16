import { useState } from "react";
import { Link } from "react-router";

import logo from '../../assets/img/logo.png'
import scripteca from '../../assets/img/scripteca.png'
import imgbanner from '../../assets/img/webDeV.png'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
    FcIdea,
    FcFlashOn,
    FcOpenedFolder,
    FcDeployment
} from "react-icons/fc";


import Card from "../../components/ui/Card";
import Modal from "../../components/ui/Modal";


const PreRegisterPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [modalData, setModalData] = useState({})

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        tel: "",
        dateBorn: ""
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const API_URL = import.meta.env.VITE_PRODUCTION_API_URL || "http://localhost:5000";
            const request = await fetch(`${API_URL}/api/preregister`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const response = await request.json()
            if (request.ok) {
                setFormData({ name: "", lastName: "", email: "", tel: "", dateBorn: "" });
                setIsVisible(true)
                setModalData({
                    title: "Pre registro exitoso 🎉",
                    message: response.message
                })
            } else {
                console.error("Error al enviar");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

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

                    <Link className="button--main" to="/login">
                        Entrar
                    </Link>
                    <button className="button--sub"><span>Contacto</span></button>
                </div>
                <section className="sidebar-footer">
                    <section className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61573641520695"><FaFacebook /></a>
                        <a href="https://www.instagram.com/scripteca/"><FaInstagram /></a>
                        <a href="https://www.youtube.com/@Scripteca"><FaYoutube /></a>
                        <a><FaXTwitter /></a>
                        <a><FaGithub /></a>
                    </section>
                </section>
            </aside >

            {/* Header */}
            < div className="pulse-box-shadow" id="inicio" >
                <header className="landing__header" id="header">
                    <div className="justify-content-center">
                        <img src={scripteca} alt="Logo" width="200px" />
                    </div>
                    <nav className="desktop-nav">
                        <Link to="/">Inicio</Link>
                        <a href="#cursos">Cursos</a>
                        <a href="#propuesta">Propuesta de aprendizaje</a>
                    </nav>
                    <div className="btn-group-header">
                        <div className="btn-container">
                            <button className="button--main">
                                <span>Entrar</span>
                            </button>
                            <button className="button--sub"><span>Contacto</span></button>
                        </div>
                        <div className="hamburger" onClick={() => setSidebarOpen(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
            </div >
            <section className="register container">
                <section className="register__banner">
                    <div>
                        <h1 className="register__banner--title">Aprende a crear el sitio web de tu negocio como un profesional</h1>
                        <p className="register__banner--caption">
                            Inscríbete al curso práctico donde aprenderás paso a paso a construir tu página web moderna, atractiva y funcional
                            sin necesidad de experiencia previa 🚀
                        </p>
                        <a href="#register">
                            <button className="button--main">
                                <span>Pre-registrate grátis</span>
                            </button>
                        </a>
                    </div>
                    <Card>
                        <img className="register__banner--img" src={imgbanner} width="100%" alt="" />
                    </Card>
                </section>
                <section className="register__benefits">
                    <h2 className="register__subtitle">Beneficios del curso</h2>
                    <div className="card__container">
                        <Card>
                            <FcIdea className="card__icon" />
                            <h4>Aprende desde cero</h4>
                        </Card>
                        <Card>
                            <FcFlashOn className="card__icon" />
                            <h4>Curso 100% práctico</h4>
                        </Card>
                        <Card>
                            <FcOpenedFolder className="card__icon" />
                            <h4>Acceso a recursos de aprendizaje</h4>
                        </Card>
                        <Card>
                            <FcDeployment className="card__icon" />
                            <h4>Crea tu sitio profesional</h4>
                        </Card>
                    </div>
                </section>
                <section className="register__roadmap">
                    <h2 className="register__subtitle">Qué aprenderás</h2>
                    <div className="card__container">
                        <Card>
                            <h4>Diseño web moderno</h4>
                        </Card>
                        <Card>
                            <h4>Construcción paso a paso</h4>
                        </Card>
                        <Card>
                            <h4>Optimización y publicación</h4>
                        </Card>
                        <Card>
                            <h4>Branding digital y conversión</h4>
                        </Card>
                    </div>
                </section>
                <div className="double__column" id="register">
                    <section className="register__testimonials">
                        <span className="register__testimonials__content">
                            Gracias a este curso, pude lanzar la web de mi negocio en solo 4 semanas
                        </span>
                        <section className="register__testimonials__caption">
                            <p>Alejandro G.</p>
                            <small>Estudiante de la Scripteca. Primera Gen.</small>
                        </section>
                    </section>
                    <section className="register__form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Apellidos"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Teléfono"
                                value={formData.tel}
                                onChange={handleChange}
                            />
                            <label htmlFor="dateBorn" style={{ marginBottom: "10px", color: "#999" }}>Fecha de nacimiento</label>
                            <input
                                type="date"
                                name="dateBorn"
                                id="dateBorn"
                                value={formData.dateBorn}
                                onChange={handleChange}
                            />
                            <button className="button--main register__form--submit" type="submit">
                                <span>Unirme a la lista de espera</span>
                            </button>
                            {isVisible && (
                                <Modal title={modalData.title}>
                                    <section>
                                        <p>
                                            {modalData.message}
                                        </p>
                                        <button className="button--main" onClick={() => { 
                                            setIsVisible(false) 
                                            setModalData({}) 
                                            }}><span>Aceptar</span>
                                        </button>
                                    </section>
                                </Modal>
                            )}
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