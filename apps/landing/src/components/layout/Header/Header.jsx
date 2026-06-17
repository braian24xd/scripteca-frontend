import { useState, useEffect, useCallback } from "react"
import { COURSE, ENROLLMENT_STATUS, HEADER_SPOTS_MODE, HEADER_SPOTS_STATIC_LABEL } from "../../../config/course";

import "./Header.scss"
import Button from "@scripteca/ui/Button"
import logo from "@assets/scripteca.png"

const NAV_ITEMS = [
  { id: "metodo", label: "Método" },
  { id: "para-quien", label: "¿Para quién?" },
  { id: "curso", label: "El curso" },
  { id: "roadmap", label: "Ruta" },
  { id: "faq", label: "FAQ" },
]

const SCROLL_THRESHOLD = 40

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const handleNav = useCallback((e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }, [])

  const isOpen = COURSE.enrollmentStatus === ENROLLMENT_STATUS.OPEN;
  const showSpots = HEADER_SPOTS_MODE !== "off" && isOpen;
  const spotsLabel =
    HEADER_SPOTS_MODE === "dynamic"
      ? `Quedan ${COURSE.spotsRemaining} cupos`
      : HEADER_SPOTS_STATIC_LABEL

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <a
            href="#hero"
            className="site-header__logo"
            onClick={(e) => handleNav(e, "hero")}
          >
            <img src={logo} alt="La Scripteca" width="180" />
          </a>

          <nav className="site-header__nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                className={`site-header__link ${activeSection === item.id ? "is-active" : ""
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

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
            <Button variant="ghost" className="site-header__actions__login">
              Entrar
            </Button>
            {/* <a
              href="#curso"
              onClick={(e) => handleNav(e, "curso")}
              className="site-header__cta"
            >
              Inscribirme
            </a> */}
            <Button 
              variant="beam"
              className="site-header__actions__cta"
            >
              Inscribirme
            </Button>

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

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className={`mobile-menu__link ${activeSection === item.id ? "is-active" : ""
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

          <Button variant="ghost" className="mobile-menu__login" onClick={() => setMenuOpen(false)}>
            Entrar
          </Button>
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
  )
}

export default Header