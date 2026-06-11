import '@styles/components/layouts/publicFooter.scss'
import logo from '@assets/img/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const PublicFooter = () => {

    return (
        <footer>
            <section className="footer-content">
                <section id="footer-mark">
                    <img src={logo} alt="logo" width="100px" />
                    <p>
                        Educación de alto rendimiento para quienes no se conforman con lo básico. En Scripteca HUB, transformamos el aprendizaje en activos digitales reales. El sistema está listo, solo faltas tú.
                    </p>
                    <section id="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61573641520695"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/scripteca/"><FaInstagram /></a>
                        <a href="https://www.youtube.com/@Scripteca"><FaYoutube /></a>
                        <a href="#"><FaTiktok /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
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
    )
}

export default PublicFooter