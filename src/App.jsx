import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreRegisterPage from './pages/LandingPages/PreRegisterPage';
import Login from './pages/Login';
import StudentRecordings from './pages/StudentRecordings';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageRecordings from './pages/ManageRecordings';
import Account from './pages/Account';
import Header from './components/Header';
import UserLayout from './layouts/UserLayout';
import {jwtDecode} from 'jwt-decode';
import './css/main.scss'
import StudentDashboardPage from './pages/StudentDashboardPage';
import CoursePage from './pages/CoursePage';

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
      <Navigate to="/dashboard" />
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
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/BuenFin2025" element={<PreRegisterPage />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas para estudiantes */}
        <Route
          element={
            <ProtectedRoute requiredRole={['student']}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/course" element={<CoursePage />} /> 
        </Route>
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