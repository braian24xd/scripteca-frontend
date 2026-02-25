import Button from '../ui/Button'
import logo from '@assets/img/scripteca.png'
import '@styles/components/layouts/appHeader.scss'
import { FaQuestion } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import UserButton from '../UserButton';


const AppHeader = () => {

    return (
        <header className="appHeader">
            <div className="container">
                <img className="appHeader__logo" src={logo} alt="Scripteca" />
                <div className="appHeader__buttons">
                    <Button className="text" type="" variant="plain">
                        Proximamente
                    </Button>
                    <span className="header__divisor text"></span>
                    <Button className="text" type="" variant="plain">
                        Mis cursos
                    </Button>
                    <span className="header__divisor text"></span>
                    <Button className="" type="rounded" variant="ghost">
                        <FaQuestion />
                    </Button>
                    <span className="header__divisor text"></span>
                    <Button className="" type="rounded" variant="ghost">
                        <IoNotifications />
                    </Button>
                    <span className="header__divisor text"></span>
                    <UserButton  initialLetter='B'/>
                </div>
            </div>
        </header>
    )
}

export default AppHeader