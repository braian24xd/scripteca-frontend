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
    FcDeployment,
    FcGlobe,
    FcMultipleDevices,
    FcTodoList,
    FcFrame,
} from "react-icons/fc";


import PublicHeader from "@components/layout/PublicHeader";
import Card from "../../components/ui/Card";
import Modal from "../../components/ui/Modal";
import Button from "@components/ui/Button";

const PreRegisterPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [modalData, setModalData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

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
                setIsLoading(false)
                setIsVisible(true)
                setModalData({
                    title: "Pre registro exitoso 🎉",
                    message: response.message
                })
            } else {
                console.error("Error al enviar");
                setIsLoading(false)
                setIsVisible(true)
                setModalData({
                    title: "¡oh no! :(",
                    message: response.message
                })
            }
        } catch (error) {
            console.error("Error:", error);
            console.error("Error al enviar");
            setIsLoading(false)
            setIsVisible(true)
            setModalData({
                title: "¡Oh no! :(",
                message: "Hubo un problema, intentalo más tarde."
            })
        }
    };

    return (
        <>
            <PublicHeader />
            <section className="register container">
                <section className="register__banner">
                    <div>
                        <h1 className="register__banner--title">Aprende a crear el sitio web de tu negocio como un profesional</h1>
                        <p className="register__banner--caption">
                            Inscríbete al curso práctico donde aprenderás paso a paso a construir tu página web moderna, atractiva y funcional
                            sin necesidad de experiencia previa 🚀
                        </p>
                        <a href="#register">
                            <Button variant="classic">
                                Pre-registrate grátis
                            </Button>
                        </a>
                    </div>
                    <Card>
                        <img className="register__banner--img" src={imgbanner} width="100%" alt="" />
                    </Card>
                </section>
                <section>
                    <h2>Descripcion del curso</h2>
                    <br />
                    <div className="card__containe" style={{ textAlign: "justify" }}>
                        <p>
                            Aprende a crear tu página web desde cero, aunque no tengas experiencia.
                            En este curso descubrirás cómo funcionan las páginas web y construirás la tuya paso a paso, con diseño moderno, buena estructura y lista para publicar.
                            Ideal si quieres impulsar tu negocio, ofrecer tus servicios o empezar en el mundo del desarrollo web.
                        </p><br />
                        <p>
                            A lo largo del curso aprenderás a: </p> <br />
                        <section className="card__container">
                            <Card>
                                <FcIdea className="card__icon" />
                                <h4>Entender qué es HTML, CSS y JavaScript (y cómo se combinan para crear cualquier sitio web).</h4>
                            </Card>
                            <Card>
                                <FcFrame className="card__icon" />
                                <h4>Diseñar una página atractiva y visualmente profesional, aunque no tengas experiencia en diseño.</h4>
                            </Card>
                            <Card>
                                <FcTodoList className="card__icon" />
                                <h4>Construir paso a paso las secciones esenciales de cualquier sitio moderno.</h4>
                            </Card>
                            <Card>
                                <FcMultipleDevices className="card__icon" />
                                <h4>Optimizar tu sitio para que cargue rápido y se vea bien en computadora y celular.</h4>
                            </Card>
                            <Card>
                                <FcGlobe className="card__icon" />
                                <h4>Publicar tu página en internet y configurarla para que tus clientes puedan encontrarte.</h4>
                            </Card>
                        </section>
                        <p>
                            Al terminar el curso tendrás tu propia página web, totalmente funcional, hecha por ti, y con los conocimientos para seguir mejorándola.
                        </p><br />
                        <p>
                            Es el primer paso perfecto si quieres emprender, ofrecer tus servicios, posicionarte como profesional o simplemente aprender una habilidad poderosa para el mundo digital actual.
                        </p>
                    </div>
                </section>
                <section className="register__roadmap">
                    <h2 className="register__subtitle">Qué aprenderás</h2>
                    <div className="card__container">
                        <Card>
                            <h4>Crearás tu propia página paso a paso</h4>
                        </Card>
                        <Card>
                            <h4>Conocerás las herramientas esenciales del desarrollo web</h4>
                        </Card>
                        <Card>
                            <h4>Diseñarás un sitio moderno y funcional</h4>
                        </Card>
                        <Card>
                            <h4>Publicarás tu web en internet</h4>
                        </Card>
                    </div>
                </section>
                <section>
                    <h2>Este curso es para ti si...</h2><br />
                    <div className="card__container">
                        <Card>
                            <h4>No sabes programación pero quieres crear tu web</h4>
                        </Card>
                        <Card>
                            <h4>Tienes un negocio y necesitas presencia digital</h4>
                        </Card>
                        <Card>
                            <h4>Has intentado construir tu web pero te confundiste</h4>
                        </Card>
                        <Card>
                            <h4>Quieres una guía clara, desde cero, sin complicaciones</h4>
                        </Card>
                    </div>
                </section>
                <section className="register__benefits">
                    <h2 className="register__subtitle">La Scripteca te ofrece:</h2>
                    <div className="card__container">
                        <Card>
                            <FcIdea className="card__icon" />
                            <h4>Aprendizaje desde cero</h4>
                        </Card>
                        <Card>
                            <FcFlashOn className="card__icon" />
                            <h4>Cursos 100% práctico</h4>
                        </Card>
                        <Card>
                            <FcOpenedFolder className="card__icon" />
                            <h4>Acceso a recursos de aprendizaje</h4>
                        </Card>
                        <Card>
                            <FcDeployment className="card__icon" />
                            <h4>Crea tu proyectos profesionales</h4>
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
                            <Button 
                                variant="classic"
                                type="submit"
                                onClick={() => setIsLoading(true)}
                                style={{margin: "0 auto", display: "block"}}
                            >
                                {isLoading === true ? "Enviando..." : "Unirme a la lista de espera"}
                            </Button>
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