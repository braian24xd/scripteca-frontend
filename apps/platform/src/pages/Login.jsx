import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@styles/pages/login.scss'
import '../css/styles.css';
import logo from '../assets/img/scripteca.png';
import Button from '../components/ui/Button';
import useAuth from '../hooks/useAuth';
import { FaBolt, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login, user } = useAuth()

  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password })
      navigate('/dashboard')
    } catch (err) {
      setError(err.response.data.message)
      console.error(err)
    }
  }

  return (
    <main className="login">
      <section className="login__credentials">
        <img className="login__credentials--img" src={logo} alt="Logo de Scripteca" />
        <h1>Inicio de Sesión</h1>
        <p>Ingresa tus credenciales</p>
        <form
          className="login__form"
          onSubmit={handleLogin}
        >
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
          <div className="password-container">
            <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"

          />
          <span onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
          </div>
          <a className="reset-password">
            ¿Olvidaste tu contraseña?
          </a>
          <br />
            <button type="submit" className="login-btn">
              EJECUTAR ACCESO <FaBolt />
            </button>
          <br />
          <p>¿Sin cuenta? <a href="#">Registrate aquí</a></p>
        </form>
        {
          error ? <p className="login__credentials--error">{error}</p> : null
        }
      </section>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
    </main>
  );
};

export default Login;