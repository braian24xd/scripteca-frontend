import Button from "./ui/Button"
import '@styles/components/courseSection.scss'
import { FaCheck } from "react-icons/fa";

const CourseSection = () => {

    return (
        <section className="container lead-product">
            <section className="lead-product__img">
                <img src="https://scripteca.com/rc/weblaunchpad-image.png" alt="Web Launchpad" />
                <div className="glow-effect"></div>
            </section>
            <section className="lead-product__content">
                <span className="lead-product__content--badge">NUEVO LANZAMIENTO</span>
                <h2 className="lead-product__content--title">Web Launchpad: Lanza el sitio de tu empresa</h2>
                <p className="lead-product__content--description">
                    Aprende a construir, diseñar y desplegar un sitio profesional sin rellenos teóricos. Un camino directo al resultado.
                </p>
                <ul className="lead-product__content--feats">
                    <li><span><FaCheck /></span>Diseño UI/UX modernos</li>
                    <li><span><FaCheck /></span>Despliegue en la nube</li>
                    <li><span><FaCheck /></span>Optimización SEO</li>
                </ul>
                <div className="lead-product__content--cta">
                    <Button variant="glow">Inscribirme ahora</Button>
                    <span>$589.90</span>
                </div>
            </section>
        </section>
    )
}

export default CourseSection