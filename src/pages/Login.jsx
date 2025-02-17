import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';
import '../css/styles.css';
import logo from '../assets/img/scripteca.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Verificar si ya hay una sesión activa
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      navigate(role === 'student' ? '/recordings' : '/admin');
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.post(`${API_URL}/api/login`, { email, password });
      const { token, role, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user)); // Guarda info del usuario

      window.location.href = role === 'student' ? '/recordings' : '/admin';
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <main className="main__login">
      <section className="login">
        <img src={logo} alt="" />
        <h1>Iniciar Sesión</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
          />
          <a className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          </a>
          <br />
          <button className="btn" type="submit">Ingresar</button>
        </form>
        <br />
        {error && <p className="error">{error}</p>}
      </section>
    </main>
  );
};

export default Login;