import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminDashboard.css';
import iconUsers from '../assets/img/icons/iconUsers.png';
import iconRecordings from '../assets/img/icons/iconRecordings.png'

const AdminDashboard = () => {
    return (
        <section className="admin-dashboard">
            <h1>Panel de Administración</h1>
            <nav className='action-cards'>
                <Link to="/admin/users">
                    <article className='action-card'>
                        <img src={iconUsers} alt="Mentoría Personalizada" />
                        <h3>Gestionar usuarios</h3>
                        <p>Agrega, modifica, actualiza y elimina usuarios con acceso a la plataforma</p>
                    </article>
                </Link>
                <Link to="/admin/recordings">
                    <article className='action-card'>
                        <img src={iconRecordings} alt="Mentoría Personalizada" />
                        <h3>Gestionar grabaciones</h3>
                        <p>Agrega, modifica, actualiza y elimina las grabaciones disponibles</p>
                    </article>
                </Link>
            </nav>
        </section>
    );
};

export default AdminDashboard;