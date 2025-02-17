import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/landingPage.css'

// Imágenes e íconos (asegúrate de tener estas rutas correctas)
import scripteca from '../assets/img/scripteca.png';
import logo from '../assets/img/logo.png';
import iconPlay from '../assets/img/icons/play.svg';
import iconCode from '../assets/img/icons/code.svg';
import iconLearn from '../assets/img/icons/iconLearn.svg';
import iconPractice from '../assets/img/icons/iconPractice.svg';
import iconCareer from '../assets/img/icons/iconCareer.svg';
import iconAccess from '../assets/img/icons/iconAccess.svg';
import iconBeginner from '../assets/img/icons/iconBeginner.png';
import iconMentor from '../assets/img/icons/iconMentor.png';
import iconProject from '../assets/img/icons/iconProject.png';
import iconFacebook from '../assets/img/icons/facebook.svg';
import iconInstagram from '../assets/img/icons/instagram.svg';
import iconYoutube from '../assets/img/icons/youtube.svg';
import iconTwitter from '../assets/img/icons/x-twitter.svg';
import iconGithub from '../assets/img/icons/github.svg';

// Íconos para la sección "Tu experiencia de aprendizaje"

import cibersecBanner from '../assets/img/banner-EspecialidadCiberseguridad.png';
import fullStackJS from '../assets/img/banner-FullStackJavaScript.png'

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
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
          <Link to="/">Contacto</Link>
        </div>
        <section className="sidebar-footer">
        <section className="social-links">
              <a><img src={iconFacebook} alt="Facebook icon" /></a>
              <a><img src={iconInstagram} alt="Instagram icon" /></a>
              <a><img src={iconYoutube} alt="Youtube icon" /></a>
              <a><img src={iconTwitter} alt="X Twitter icon" /></a>
              <a><img src={iconGithub} alt="Github icon" /></a>
            </section>
        </section>
      </div>

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
              <Link to="/" className="btn-contact">Contacto</Link>
            </div>
            <div className="hamburger" onClick={() => setSidebarOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="landing__main">
        {/* Hero Banner */}
        <section className="hero__banner">
          <h1 className="hero__banner__title">
            Aprende hoy:<br />Lidera mañana<span className="blinking-cursor"></span>
          </h1>
          <p>
            Educación a tu alcance, donde y cuando quieras.
            Impulsa tu carrera con nuestros cursos especializados
            por menos de un café al día.
          </p>
          <div className="btn-container">
            <a>Más información</a>
            <a href="#cursos">Todos los cursos</a>
          </div>
        </section>

        {/* Nueva Sección: Sin experiencia en programación */}
        <section className="no-experience">
          <h2>No necesitas experiencia en programación</h2>
          <p>
            Si nunca has programado, no te preocupes. Nuestros cursos están diseñados para que aprendas desde cero. Con apoyo personalizado, clases interactivas y proyectos prácticos, te llevamos paso a paso al éxito en el mundo digital.
          </p>
          <div className="no-experience-cards">
            <div className="card">
              <img src={iconBeginner} alt="Clases para Principiantes" />
              <h3>Clases para Principiantes</h3>
              <p>Descubre el mundo de la programación desde cero, sin requerir conocimientos previos.</p>
            </div>
            <div className="card">
              <img src={iconMentor} alt="Mentoría Personalizada" />
              <h3>Mentoría Personalizada</h3>
              <p>Recibe el apoyo de expertos que te guiarán en cada etapa de tu aprendizaje.</p>
            </div>
            <div className="card">
              <img src={iconProject} alt="Aprendizaje Práctico" />
              <h3>Aprendizaje Práctico</h3>
              <p>Aplica lo aprendido en proyectos reales desde el primer día.</p>
            </div>
          </div>
        </section>

        {/* Sección: Nuestros Cursos */}
        <section className="courses" id="cursos">
          <h2>Nuestros Cursos</h2>
          <div className="courses-container">
            <div className="course-card">
              <img src={cibersecBanner} alt="Curso de Programación Web" />
              <div className="course-info">
                <h3>Curso de Programación Web</h3>
                <p>Aprende a desarrollar aplicaciones web modernas desde cero, sin necesidad de experiencia previa.</p>
                <a>Ver Detalles</a>
              </div>
            </div>
            <div className="course-card">
              <img src={fullStackJS} alt="Curso de Data Science" />
              <div className="course-info">
                <h3>Curso de Data Science</h3>
                <p>Explora análisis de datos y machine learning mediante proyectos prácticos y reales.</p>
                <a>Ver Detalles</a>
              </div>
            </div>
            <div className="course-card">
              <img src={cibersecBanner} alt="Curso de Desarrollo Móvil" />
              <div className="course-info">
                <h3>Curso de Desarrollo Móvil</h3>
                <p>Conviértete en un experto desarrollador de aplicaciones móviles con clases prácticas y dinámicas.</p>
                <a>Ver Detalles</a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "¿Cómo trabajamos?" */}
        <section className="how-we-work" id="propuesta">
          <h2>¿Qué vas a hacer?</h2>
          <div className="work-steps-container">
            <section className="work-step">
              <img src={iconLearn} alt="Aprende" />
              <h3>Paso 1: Aprende</h3>
              <p>Accede a contenido de alta calidad y estudia a tu ritmo.</p>
            </section>
            <section className="work-step">
              <img src={iconPractice} alt="Practica" />
              <h3>Paso 2: Practica</h3>
              <p>Aplica lo aprendido con ejercicios prácticos y proyectos reales.</p>
            </section>
            <section className="work-step">
              <img src={iconCareer} alt="Impulsa tu carrera" />
              <h3>Paso 3: Impulsa tu carrera</h3>
              <p>Comparte tu portafolio y accede a oportunidades laborales.</p>
            </section>
          </div>
        </section>

        {/* Sección "Tu experiencia de aprendizaje" */}
        <section className="experience">
          <h2>Tu experiencia de aprendizaje</h2>
          <div className="experience-items-container">
            <div className="experience-item">
              <img src={iconPlay} alt="Clases en vivo" />
              <h3>Clases en Vivo Intensivas</h3>
              <p>
                Participa en sesiones en vivo diseñadas para maximizar tu aprendizaje.
                Interactúa en tiempo real con instructores expertos y resuelve tus dudas al instante.
              </p>
            </div>
            <div className="experience-item">
              <img src={iconCode} alt="Proyectos prácticos" />
              <h3>Proyectos Prácticos Reales</h3>
              <p>
                Desarrolla proyectos prácticos que te permitirán aplicar lo aprendido y
                construir un portafolio profesional sólido.
              </p>
            </div>
            <div className="experience-item">
              <img src={iconAccess} alt="Acceso a grabaciones" />
              <h3>Acceso Ilimitado a Grabaciones</h3>
              <p>
                Tendrás acceso a una plataforma intuitiva donde podrás revisar las grabaciones de cada sesión y acceder a materiales complementarios,
                asegurándote de no perder ningún detalle, incluso si no puedes asistir en vivo.
              </p>
            </div>
          </div>
        </section>
      </main>

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
              <a><img src={iconFacebook} alt="Facebook icon" /></a>
              <a><img src={iconInstagram} alt="Instagram icon" /></a>
              <a><img src={iconYoutube} alt="Youtube icon" /></a>
              <a><img src={iconTwitter} alt="X Twitter icon" /></a>
              <a><img src={iconGithub} alt="Github icon" /></a>
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
  );
}

export default LandingPage;
