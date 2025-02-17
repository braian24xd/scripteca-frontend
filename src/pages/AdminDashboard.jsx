import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Panel de Administración</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/users">Gestionar Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/admin/recordings">Gestionar Grabaciones</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;