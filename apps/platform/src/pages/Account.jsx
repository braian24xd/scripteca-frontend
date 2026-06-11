import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/account.css';

const API_URL = import.meta.env.VITE_PRODUCTION_API_URL || "http://localhost:5000";

const Account = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
  });

  const [passwords, setPasswords] = useState({
    currentPass: '',
    newPass: '',
    confirmNewPass: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userData = response.data;

        if (userData.dateOfBirth) {
          userData.dateOfBirth = new Date(userData.dateOfBirth)
            .toISOString()
            .split('T')[0];
        }
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwords.newPass !== passwords.confirmNewPass) {
      setMessage('Las contraseñas nuevas no coinciden.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'https://scripteca-backend-d240561046d4.herokuapp.com/api/users/change-password',
        {
          currentPassword: passwords.currentPass,
          newPassword: passwords.newPass,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage('Contraseña actualizada correctamente.');
      setPasswords({
        currentPass: '',
        newPass: '',
        confirmNewPass: '',
      });
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage(
        error.response?.data?.message || 'Hubo un error al actualizar la contraseña.'
      );
    }
  };

  return (
    <section className='account'>
      <Link to="/recordings/">Regresar</Link>
      <h1>Cuenta: {user.name} {user.lastName}</h1>
      <form className='account__info frame'>
        <h2>Información personal</h2>
        <p className='info-text'>Aquí se mostrará su información personal. Si necesita alguna corrección póngase en contacto con el centro de ayuda</p>
        <div className='input-group'>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={user.name || ''}
            readOnly
          />
        </div>
        <div className="input-group">
          <label>Apellidos</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName || ''}
            readOnly
          />
        </div>
        <div className='input-group'>
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={user.email || ''}
            readOnly
          />
        </div>
        <div className="input-group">
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            value={user.phone || ''}
            readOnly
          />
        </div>
        <div className="input-group">
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={user.dateOfBirth || ''}
            readOnly
          />
        </div>
      </form>
      {/* <form className='account__resetPass frame' onSubmit={handlePasswordSubmit}>
        <h2>Cambiar contraseña</h2>
        <p className='info-text'>Se recomienda cambiar la contraseña que recibió inicialmente por una personalizada</p>
        <label htmlFor="currentPass">Contraseña actual</label>
        <input
          type="password"
          name="currentPass"
          id="currentPass"
          value={passwords.currentPass}
          onChange={handlePasswordChange}
        />
        <div className='double-input'>
          <div className='input-group'>
            <label htmlFor="newPass">Nueva contraseña</label>
            <input
              type="password"
              name="newPass"
              id="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='input-group'>
            <label htmlFor="confirmNewPass">Confirmar contraseña nueva</label>
            <input
              type="password"
              name="confirmNewPass"
              id="confirmNewPass"
              value={passwords.confirmNewPass}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button type="submit">Guardar</button>
        {message && <p className="message">{message}</p>}
      </form> */}
    </section>
  );
};

export default Account;