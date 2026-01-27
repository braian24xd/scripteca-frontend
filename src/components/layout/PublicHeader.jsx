import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import logo from '@assets/img/scripteca.png'
import Button from '../ui/Button'
import { RiMenu3Fill } from "react-icons/ri"
import { MdClose } from "react-icons/md";
import '@styles/components/layouts/publicHeader.scss'


const PublicHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <Link to="/">            
                    <img className="header__logo" src={logo} alt="Logo Scripteca" />
                </Link>
                <div className={clsx("header__nav", isOpen && "header__nav--active")}>
                    <nav className="header__nav__navigation">
                        <a href="#inicio">Inicio</a>
                        <a href="#cursos">Cursos</a>
                        <a href="#propuesta">Propuesta de aprendizaje</a>
                    </nav>
                    <div className="header__nav__actions">
                        <Link to="/login">
                            <Button type="single" variant="classic">
                                Entrar
                            </Button>
                        </Link>
                        <Button type="single" variant="sub">
                            Contacto
                        </Button>
                    </div>
                </div>
                    <Button type="icon" variant="ghost" className="header__menu" onClick={(prev) => { setIsOpen(prev => !prev) }} >
                        {!isOpen && <RiMenu3Fill size="2em" />}
                        {isOpen && <MdClose size="2em" />}
                    </Button>
                </div>
        </header>
    )
}

export default PublicHeader