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
import iconTech from '../assets/img/icons/iconTech.png';
import iconWork from '../assets/img/icons/iconWork.png';
import iconBusiness from '../assets/img/icons/iconBusiness.png';

// Íconos para la sección "Tu experiencia de aprendizaje"

import sitioWebBanner from '../assets/img/banner-CreaSitioWeb.jpg';
import CourseCard from "../components/CourseCard";

const LandingPage = () => {
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
          <Link href="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..." target="_blank">Contacto</Link>
        </div>
        <section className="sidebar-footer">
          <section className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61573641520695"><img src={iconFacebook} alt="Facebook icon" /></a>
            <a href="https://www.instagram.com/scripteca/"><img src={iconInstagram} alt="Instagram icon" /></a>
            <a href="https://www.youtube.com/@Scripteca"><img src={iconYoutube} alt="Youtube icon" /></a>
            <a><img src={iconTwitter} alt="X Twitter icon" /></a>
            <a><img src={iconGithub} alt="Github icon" /></a>
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
              <Link to="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..." target="_blank" className="btn-contact">Contacto</Link>
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
            <a href="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..." target="_blank">Más información</a>
            <a href="#cursos">Todos los cursos</a>
          </div>
        </section>

        <section className="who-can-learn">
          <h2>¿Para quién es este curso?</h2>
          <div className="cards-container">

            <div className="card">
              <img src={iconTech} alt="Apasionados por la tecnología" />
              <h3>Para apasionados de la tecnología</h3>
              <p>Si te encanta la programación y quieres aprender por hobby, aquí tienes un camino claro y estructurado.</p>
            </div>

            <div className="card">
              <img src={iconWork} alt="Destacar en el empleo" />
              <h3>Para mejorar en tu empleo</h3>
              <p>Domina habilidades clave para destacar en tu trabajo y abrir nuevas oportunidades laborales.</p>
            </div>

            <div className="card">
              <img src={iconBusiness} alt="Emprendedores" />
              <h3>Para emprendedores</h3>
              <p>Aprende a construir y optimizar un sitio web para tu negocio o proyecto personal.</p>
            </div>

            <div className="card">
              <img src={iconCareer} alt="Buscando primer empleo" />
              <h3>Para quienes buscan su primer empleo en tecnología</h3>
              <p>Crea un portafolio sólido con proyectos reales y aumenta tus oportunidades laborales.</p>
            </div>

          </div>
        </section>

        {/* Nueva Sección: Sin experiencia en programación */}
        <section className="no-experience">
          <h2>No necesitas experiencia en programación</h2>
          <p>
            Si nunca has programado, no te preocupes. Nuestros cursos están diseñados para que aprendas desde cero. Con apoyo personalizado, clases interactivas y proyectos prácticos, te llevamos paso a paso al éxito en el mundo digital.
          </p>
          <section className="no-experience-cards">
            <article className="card">
              <img src={iconBeginner} alt="Clases para Principiantes" />
              <h3>Clases para Principiantes</h3>
              <p>Descubre el mundo de la programación desde cero, sin requerir conocimientos previos.</p>
            </article>
            <article className="card">
              <img src={iconMentor} alt="Mentoría Personalizada" />
              <h3>Mentoría Personalizada</h3>
              <p>Recibe el apoyo de expertos que te guiarán en cada etapa de tu aprendizaje.</p>
            </article>
            <article className="card">
              <img src={iconProject} alt="Aprendizaje Práctico" />
              <h3>Aprendizaje Práctico</h3>
              <p>Aplica lo aprendido en proyectos reales desde el primer día.</p>
            </article>
          </section>
        </section>

        {/* Sección: Nuestros Cursos */}
        <section className="courses" id="cursos">
          <h2>Nuestros Cursos</h2>
          <section className="courses-container">
            <CourseCard
              img={sitioWebBanner}
              title="Crea tu sitio web como un profesional, paso a paso"
              description="
                Aprende a desarrollar sitios web modernos desde cero, sin necesidad de experiencia previa.
              "
              link="localhost:3000"
            />
          </section>
        </section>

        {/* Sección "¿Cómo trabajamos?" */}
        <section className="how-we-work" id="propuesta">
          <h2>¿Qué vas a hacer?</h2>
          <section className="work-steps-container">
            <article className="work-step">
              <img src={iconLearn} alt="Aprende" />
              <h3>Paso 1: Aprende</h3>
              <p>Accede a contenido de alta calidad y estudia a tu ritmo.</p>
            </article>
            <article className="work-step">
              <img src={iconPractice} alt="Practica" />
              <h3>Paso 2: Practica</h3>
              <p>Aplica lo aprendido con ejercicios prácticos y proyectos reales.</p>
            </article>
            <article className="work-step">
              <img src={iconCareer} alt="Impulsa tu carrera" />
              <h3>Paso 3: Impulsa tu carrera</h3>
              <p>Comparte tu portafolio y accede a oportunidades laborales.</p>
            </article>
          </section>
        </section>

        {/* Sección "Tu experiencia de aprendizaje" */}
        <section className="experience">
          <h2>Tu experiencia de aprendizaje</h2>
          <section className="cards-container">
            <article className="card">
              <img src={iconPlay} alt="Clases en vivo" />
              <h3>Clases en Vivo Intensivas</h3>
              <p>
                Participa en sesiones en vivo diseñadas para maximizar tu aprendizaje.
                Interactúa en tiempo real con instructores expertos y resuelve tus dudas al instante.
              </p>
            </article>
            <article className="card">
              <img src={iconCode} alt="Proyectos prácticos" />
              <h3>Proyectos Prácticos Reales</h3>
              <p>
                Desarrolla proyectos prácticos que te permitirán aplicar lo aprendido y
                construir un portafolio profesional sólido.
              </p>
            </article>
            <article className="card">
              <img src={iconAccess} alt="Acceso a grabaciones" />
              <h3>Acceso Ilimitado a Grabaciones</h3>
              <p>
                Tendrás acceso a una plataforma intuitiva donde podrás revisar las grabaciones de cada sesión y acceder a materiales complementarios,
                asegurándote de no perder ningún detalle, incluso si no puedes asistir en vivo.
              </p>
            </article>
          </section>
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
              <a href="https://www.facebook.com/profile.php?id=61573641520695"><img src={iconFacebook} alt="Facebook icon" /></a>
              <a href="https://www.instagram.com/scripteca/"><img src={iconInstagram} alt="Instagram icon" /></a>
              <a href="https://www.youtube.com/@Scripteca"><img src={iconYoutube} alt="Youtube icon" /></a>
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
