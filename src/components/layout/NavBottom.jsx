import { ImHome } from "react-icons/im";
import { ImBooks } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import '@styles/components/layouts/navBottom.scss'
import UserButton from "../UserButton";
import RadialProgress from "../ui/RadialProgress";

const NavBottom = () => {

    return (
        <nav class="bottom-nav" aria-label="Navegación principal móvil">
            <ul class="bottom-nav__list">

                <li class="bottom-nav__list__item bottom-nav__list__item--active">
                    <a href="#" class="bottom-nav__link" aria-current="page">
                        <span class="bottom-nav__icon" aria-hidden="true">
                            <span class="bottom-nav__icon-symbol">
                                <ImHome size="2em" />
                            </span>
                        </span>
                        <span class="bottom-nav__label">Inicio</span>
                    </a>
                </li>

                <li class="bottom-nav__list__item">
                    <a href="#" class="bottom-nav__link">
                        <span class="bottom-nav__icon" aria-hidden="true">
                            <span class="bottom-nav__icon-symbol">
                                <ImBooks size="2em" />
                            </span>
                        </span>
                        <span class="bottom-nav__label">Cursos</span>
                    </a>
                </li>

                <li class="bottom-nav__list__item bottom-nav__list__item--center">
                    <a href="#" class="bottom-nav__link">

                        <span class="bottom-nav__progress" aria-label="Progreso total: 42%">
                            <RadialProgress />
                        </span>

                    </a>
                </li>

                <li class="bottom-nav__list__item">
                    <a href="#" class="bottom-nav__link">
                        <span class="bottom-nav__icon" aria-hidden="true">
                            <span class="bottom-nav__icon-symbol">
                                <ImSearch size="2em" />
                            </span>
                        </span>
                        <span class="bottom-nav__label">Explorar</span>
                    </a>
                </li>

                <li class="bottom-nav__list__item">
                    <a href="#" class="bottom-nav__link">
                        <span class="bottom-nav__icon user__button" aria-hidden="true">
                            <UserButton initialLetter="B" />
                        </span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default NavBottom