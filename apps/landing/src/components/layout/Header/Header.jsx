// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import clsx from 'clsx'
// import logo from '@assets/scripteca.png'
// import Button from '@scripteca/ui/Button'
// import { RiMenu3Fill } from "react-icons/ri"
// import { MdClose } from "react-icons/md";
// import './header.scss'


// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <header className="header">
//             <div className="container">
//                 {/* <Link to="/">             */}
//                     <img className="header__logo" src={logo} alt="Logo Scripteca" />
//                 {/* </Link> */}
//                 <div className={clsx("header__nav", isOpen && "header__nav--active")}>
//                     <nav className="header__nav__navigation">
//                         <a href="#inicio">Inicio</a>
//                         <a href="#cursos">Cursos</a>
//                         <a href="#propuesta">Propuesta de aprendizaje</a>
//                     </nav>
//                     <div className="header__nav__actions">
//                         {/* <Link to="/"> */}
//                             <Button type="single" variant="glow">
//                                 Entrar
//                             </Button>
//                         {/* </Link> */}
//                         <Button type="single" variant="sub">
//                             Contacto
//                         </Button>
//                     </div>
//                 </div>
//                     <Button type="icon" variant="ghost" className="header__menu" onClick={(prev) => { setIsOpen(prev => !prev) }} >
//                         {!isOpen && <RiMenu3Fill size="2em" />}
//                         {isOpen && <MdClose size="2em" />}
//                     </Button>
//                 </div>
//         </header>
//     )
// }

// export default Header

import { useState, useEffect, useCallback } from "react";
import {
  COURSE,
  HEADER_SPOTS_MODE,
  HEADER_SPOTS_STATIC_LABEL,
} from "../../../config/course";
import "./Header.scss";
import logo from "@assets/scripteca.png"

const NAV_ITEMS = [
  { id: "metodo", label: "Método" },
  { id: "para-quien", label: "¿Para quién?" },
  { id: "curso", label: "El curso" },
  { id: "roadmap", label: "Ruta" },
  { id: "faq", label: "FAQ" },
];

const SCROLL_THRESHOLD = 40;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll-aware: transparente -> glassmorphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // indicador de sección activa
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // bloquea el scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const showSpots = HEADER_SPOTS_MODE !== "off";
  const spotsLabel =
    HEADER_SPOTS_MODE === "dynamic"
      ? `Quedan ${COURSE.spotsRemaining} cupos`
      : HEADER_SPOTS_STATIC_LABEL;

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner">
          {/* Logo */}
          <a
            href="#hero"
            className="site-header__logo"
            onClick={(e) => handleNav(e, "hero")}
          >
            <img src={logo} alt="La Scripteca" width="180" />
          </a>

          {/* Nav desktop */}
          <nav className="site-header__nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                className={`site-header__link ${
                  activeSection === item.id ? "is-active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acciones */}
          <div className="site-header__actions">
            {showSpots && (
              <span
                className={`site-header__spots ${scrolled ? "is-visible" : ""}`}
                aria-live="polite"
              >
                <span className="site-header__spots-dot" />
                {spotsLabel}
              </span>
            )}

            <a href="/login" className="site-header__login">
              Entrar
            </a>

            <a
              href="#curso"
              onClick={(e) => handleNav(e, "curso")}
              className="site-header__cta"
            >
              Inscribirme
            </a>

            <button
              type="button"
              className={`site-header__burger ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil full-screen */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className={`mobile-menu__link ${
                activeSection === item.id ? "is-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          {showSpots && (
            <span className="mobile-menu__spots">
              <span className="site-header__spots-dot" />
              {spotsLabel}
            </span>
          )}
          <a href="/login" className="mobile-menu__login" onClick={() => setMenuOpen(false)}>
            Entrar
          </a>
          <a
            href="#curso"
            onClick={(e) => handleNav(e, "curso")}
            className="mobile-menu__cta"
          >
            Inscribirme
          </a>
        </div>
      </div>
    </>
  );
}