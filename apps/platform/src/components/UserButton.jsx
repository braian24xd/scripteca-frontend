import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from './ui/Button'
import '@styles/components/userButton.scss'

import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { FaChevronDown } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io";


const UserButton = ({ className }) => {
    const [dropdown, setDropdown] = useState(false)
    const { user, isLoading, logout } = useAuth()
    if (isLoading || !user) return null
    const initialLetter = user.name ? user.name.slice(0, 1).toUpperCase() : "?"
    const lastName = user.lastName.split(" ")

    const handleUserDropdown = () => setDropdown(!dropdown)

    const handleLogout = async () => {
        await logout()
    }

    return (
        <>
            <section className={`profile-button ${className ? className : ''}`} onClick={handleUserDropdown}>
                <div className="profile-button__avatar">
                    <div className="icon-container">
                        <span>{initialLetter}</span>
                    </div>
                </div>
                <div className="profile-button__user">
                    <p className="profile-button__user--name">{user.name + " " + lastName[0]}</p>
                    <p className="profile-button__user--email">{user.email}</p>
                </div>
                <FaChevronDown className={`profile-button__icon ${dropdown ? 'rotate' : ''}`} />
            </section>
            {dropdown && <section className="dropdown-button">

                <p className="dropdown-button__items--name">{user.name + " " + lastName[0]}</p>
                <p className="dropdown-button__items--email">{user.email}</p>
                <hr className="dropdown-button__items--line" />
                <Button className="dropdown-button__items--profile" variant="ghost">
                    <AiOutlineUser size="1.4em" />
                    Ver mi perfil
                </Button>
                <hr />
                <ul>
                    <li className="dropdown-button__items">
                        <IoSettingsOutline /><Link to="#">Preferencias</Link>
                    </li>
                    <li className="dropdown-button__items">
                        <IoIosHelpCircleOutline /><Link to="#">Asistencia</Link>
                    </li>
                </ul>
                <hr />
                <Button className="dropdown-button__items--logout" variant="ghost" onClick={handleLogout}>
                    <IoIosLogOut size="1.4em" />Cerrar Sesión
                </Button>
            </section>}
        </>
    )
}

export default UserButton