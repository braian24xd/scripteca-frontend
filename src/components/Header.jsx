import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../assets/img/scripteca.png';

const Header = ({ user, logout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llamar la función logout pasada como prop
    navigate('/'); // Redirigir al login
    setMenuOpen(false); // Cerrar el menú al cerrar sesión
  };

  const handleNavigate = (path) => {
    navigate(path); // Navegar a la ruta correspondiente
    setMenuOpen(false); // Cerrar el menú al hacer clic en una opción
  };

  return (
    <header>
      <Link to="/recordings/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <section className="user-menu">
        <button
          className="btn-user"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ¡Hola {user.name}!
        </button>
        {menuOpen && (
          <ul className="dropdown-menu">
            <li className="userName">{user.name} {user.lastName}</li>
            <hr />
            <li onClick={() => handleNavigate("/account")}>Mi perfil</li>
            <hr />
            <li className="logout" onClick={handleLogout}>Cerrar sesión</li>
          </ul>
        )}
      </section>
    </header>
  );
};

export default Header;