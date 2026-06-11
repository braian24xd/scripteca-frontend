import { ImHome } from "react-icons/im";
import { ImBooks } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import '@styles/components/layouts/navBottom.scss'
import UserButton from "../UserButton";
import RadialProgress from "../ui/RadialProgress";
import { Link } from 'react-router-dom'

const NavBottom = () => {

    return (
        <nav className="bottom-nav" aria-label="Navegación principal móvil">
            <ul className="bottom-nav__list">

                <li className="bottom-nav__list__item bottom-nav__list__item--active">
                    <Link to="#" className="bottom-nav__link" aria-current="page">
                        <span className="bottom-nav__icon" aria-hidden="true">
                            <span className="bottom-nav__icon-symbol">
                                <ImHome size="2em" />
                            </span>
                        </span>
                        <span className="bottom-nav__label">Inicio</span>
                    </Link>
                </li>

                <li className="bottom-nav__list__item">
                    <Link to="#" className="bottom-nav__link">
                        <span className="bottom-nav__icon" aria-hidden="true">
                            <span className="bottom-nav__icon-symbol">
                                <ImBooks size="2em" />
                            </span>
                        </span>
                        <span className="bottom-nav__label">Cursos</span>
                    </Link>
                </li>

                <li className="bottom-nav__list__item bottom-nav__list__item--center">
                    <Link to="#" className="bottom-nav__link">

                        <span className="bottom-nav__progress" aria-label="Progreso total: 42%">
                            <RadialProgress />
                        </span>

                    </Link>
                </li>

                <li className="bottom-nav__list__item">
                    <Link to="#" className="bottom-nav__link">
                        <span className="bottom-nav__icon" aria-hidden="true">
                            <span className="bottom-nav__icon-symbol">
                                <ImSearch size="2em" />
                            </span>
                        </span>
                        <span className="bottom-nav__label">Explorar</span>
                    </Link>
                </li>

                <li className="bottom-nav__list__item">
                        <span className="bottom-nav__icon user__button" aria-hidden="true">
                            <UserButton />
                        </span>
                </li>

            </ul>
        </nav>
    )
}

export default NavBottom