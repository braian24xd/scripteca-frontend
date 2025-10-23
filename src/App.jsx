import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import StudentRecordings from './pages/StudentRecordings';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageRecordings from './pages/ManageRecordings';
import Account from './pages/Account';
import Header from './components/Header';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ requiredRole, children }) => {
  const token = localStorage.getItem('token'); // Obtener el token
  let user = null;

  if (token) {
    try {
      user = jwtDecode(token); // Decodificar el token
    } catch (error) {
      console.error('Token inválido:', error);
    }
  }

  if (!user) {
    // Si no hay usuario autenticado, redirigir al login
    return <Navigate to="/login" />;
  }

  if (!requiredRole.includes(user.role)) {
    // Si el rol no coincide, redirigir según el rol del usuario
    return user.role === 'student' ? (
      <Navigate to="/recordings" />
    ) : (
      <Navigate to="/login" />
    );
  }

  return children; // Renderizar contenido si el usuario cumple con los requisitos
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Limpiar el token del almacenamiento local
    setUser(null); // Actualizar el estado del usuario
  };

  return (
    <Router>
      {/* Renderiza el Header solo si el usuario está autenticado */}
      {user && <Header user={user} logout={logout} />}

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />} />

        {/* Rutas para estudiantes */}
        <Route
          path="/recordings"
          element={
            <ProtectedRoute requiredRole={['student']}>
              <StudentRecordings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute requiredRole={['student', 'admin']}>
              <Account />
            </ProtectedRoute>
          }
        />

        {/* Rutas para administradores */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole={['admin']}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/recordings"
          element={
            <ProtectedRoute requiredRole={['admin']}>
              <ManageRecordings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
// nuevo codigo