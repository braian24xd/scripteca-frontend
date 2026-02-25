import ContinueLearning from "./ContinueLearning"
import '../css/layout/studentDashboard.scss'
import Card from '@components/ui/Card'
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { BsDisplay } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";

import bannerCourseWebSite from "@assets/img/banner-CreaSitioWeb.jpg"
import bannerCourseCyberSecurity from "@assets/img/banner-EspecialidadCiberseguridad.png"
import bannerCourseFullStackJS from "@assets/img/banner-FullStackJavaScript.png"
import RadialProgress from "./ui/RadialProgress";

const studentDashboard = () => {

    return (
        <div className="container">
            <section className="studentDashboard">
                <div className="studentDashboard__col">
                    <ContinueLearning />
                    <hr className="divisor" />
                    <Card className="roadmap">
                        <div className="roadmap__header">
                            <FaRegCheckCircle size="1.8em" />
                            <h2>Descubre tu ruta profesional</h2>
                        </div>
                        <section className="roadmap__body">
                            <p>
                                Averigua cuál es el mejor camino en desarrollo según sus aptitudes
                                y objetivos. Toma un diagnostico rápido y obtén una ruta
                                personalizada para alcanzar tus metas en el mundo tech
                            </p>
                            <p>
                                Más de 120 alumnos ya descubrieron su ruta ideal.
                            </p>
                            <Button variant="ghost">
                                Realizar diagnostico (3 min)
                            </Button>
                        </section>
                    </Card>
                    <section className="new-courses">
                        <h2>Explora nuevos cursos</h2>

                        <div className="courses">
                            <Card className="new-course">
                                <section className="new-course__header">
                                    <img src={bannerCourseWebSite} alt="" />
                                </section>
                                <section className="new-course__body">
                                    <h3 className="new-course__body--title">
                                        Crea el sitio web de tu empresa, desde cero.
                                    </h3>
                                    <section className="new-course__body--feature">
                                        <Badge>En vivo</Badge>
                                        <Badge>6 semanas</Badge>
                                    </section>
                                    <small className="new-course__body--description">
                                        Aprende a desarrollar sitios web modernos desde cero,
                                        sin necesidad de experiencia previa.
                                    </small>
                                </section>
                                <section className="new-course__footer">
                                    <Button variant="ghost">
                                        Ver curso
                                    </Button>
                                </section>
                            </Card>
                            <Card className="new-course">
                                <section className="new-course__header">
                                    <img src={bannerCourseCyberSecurity} alt="" />
                                </section>
                                <section className="new-course__body">
                                    <h3 className="new-course__body--title">
                                        Crea el sitio web de tu empresa, desde cero.
                                    </h3>
                                    <section className="new-course__body--feature">
                                        <Badge>En vivo</Badge>
                                        <Badge>6 semanas</Badge>
                                    </section>
                                    <small className="new-course__body--description">
                                        Aprende a desarrollar sitios web modernos desde cero,
                                        sin necesidad de experiencia previa.
                                    </small>
                                </section>
                                <section className="new-course__footer">
                                    <Button variant="ghost">
                                        Ver curso
                                    </Button>
                                </section>
                            </Card>
                            <Card className="new-course">
                                <section className="new-course__header">
                                    <img src={bannerCourseFullStackJS} alt="" />
                                </section>
                                <section className="new-course__body">
                                    <h3 className="new-course__body--title">
                                        Crea el sitio web de tu empresa, desde cero.
                                    </h3>
                                    <section className="new-course__body--feature">
                                        <Badge>En vivo</Badge>
                                        <Badge>6 semanas</Badge>
                                    </section>
                                    <small className="new-course__body--description">
                                        Aprende a desarrollar sitios web modernos desde cero,
                                        sin necesidad de experiencia previa.
                                    </small>
                                </section>
                                <section className="new-course__footer">
                                    <Button variant="ghost">
                                        Ver curso
                                    </Button>
                                </section>
                            </Card>
                        </div>
                    </section>
                    <section className="soon-courses">
                        <h2>
                            Proximamente en La Scripteca
                        </h2>
                        <div className="courses">
                            <Card className="soon-course">
                                <section className="soon-course__icon">
                                    <TbBrandMongodb size="2em" />
                                </section>
                                <section className="soon-course__content">
                                    <h3 className="soon-course__content--title">MongoDB desde Cero</h3>
                                    <Badge>Lanzamiento en Abril 2026!</Badge>
                                </section>
                            </Card>
                            <Card className="soon-course">
                                <section className="soon-course__icon">
                                    <FaReact size="2em" />
                                </section>
                                <section className="soon-course__content">
                                    <h3 className="soon-course__content--title">Máster en React JS</h3>
                                    <Badge>Lanzamiento en Diciembre 2026!</Badge>
                                </section>
                            </Card>
                            <Card className="soon-course">
                                <section className="soon-course__icon">
                                    <FaSass size="2em" />
                                </section>
                                <section className="soon-course__content">
                                    <h3 className="soon-course__content--title">Uso de SASS para estilos</h3>
                                    <Badge>Proximamente</Badge>
                                </section>
                            </Card>
                        </div>
                    </section>
                </div>
                <div className="studentDashboard__col secondary">
                    <Card className="studentDashboard__progress">
                        <h2 className="studentDashboard__progress--title">
                            Mi progreso
                        </h2>
                        <RadialProgress />
                        <hr className="studentDashboard__progress--divisor" />
                        <section className="studentDashboard__progress--modules">
                            <PiGraduationCapDuotone size="1.5em" /> <span>7/15</span> Módulos
                        </section>
                    </Card>
                    <Card className="studentDashboard__register">
                        <h2>Cursos inscritos</h2>
                        <article className="studentDashboard__register__course">
                            <div className="studentDashboard__register__course--content">
                                <IoCodeSlashOutline size="1.5em" />
                                <div>
                                    <h3>Crea tu sitio web como un...</h3>
                                    <small>Completados - 3/8 módulos</small>
                                </div>
                            </div>
                            <div className="progress-bar--single">
                                <div style={{ width: "65%" }}></div>
                            </div>
                        </article>
                        <hr className="studentDashboard__register__divisor" />
                        <article className="studentDashboard__register__course">
                            <div className="studentDashboard__register__course--content">
                                <BsDisplay size="1.5em" />
                                <div>
                                    <h3>Dominando el Frontend</h3>
                                    <small>Completados - 18/80 módulos</small>
                                </div>
                            </div>
                            <div className="progress-bar--single">
                                <div style={{ width: "20%" }}></div>
                            </div>
                        </article>
                        <hr className="studentDashboard__register__divisor" />
                        <article className="studentDashboard__register__course">
                            <div className="studentDashboard__register__course--content">
                                <FaNodeJs size="1.5em" />
                                <div>
                                    <h3>Backend con Node.js</h3>
                                    <small>Completados - 42/120 módulos</small>
                                </div>
                            </div>
                            <div className="progress-bar--single">
                                <div style={{ width: "34%" }}></div>
                            </div>
                        </article>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default studentDashboard