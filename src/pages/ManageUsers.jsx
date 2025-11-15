import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_PRODUCTION_API_URL || "http://localhost:5000";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    role: 'student',
  });
  const [editUser, setEditUser] = useState(null);

  // Obtener usuarios
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Agregar nuevo usuario
  const handleAddUser = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_URL}/api/users`, newUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
      setNewUser({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        role: 'student',
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Editar usuario
  const handleEditUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${API_URL}/api/users/${id}`, editUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
      setEditUser(null);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditUser({
      _id: user._id,
      name: user.name || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      dateOfBirth: user.dateOfBirth || '',
      role: user.role || 'student',
    });
  };

  // Eliminar usuario
  const handleDeleteUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Gestionar Usuarios</h2>

      {/* Formulario para agregar usuario */}
      <div>
        <h3>Agregar Nuevo Usuario</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          value={newUser.dateOfBirth}
          onChange={(e) =>
            setNewUser({ ...newUser, dateOfBirth: e.target.value })
          }
          required
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="student">Estudiante</option>
          <option value="admin">Administrador</option>
        </select>
        <button onClick={handleAddUser}>Agregar</button>
      </div>

      {/* Tabla de usuarios */}
      <h3>Lista de Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Fecha de Nacimiento</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {editUser && editUser._id === user._id ? (
                  <input
                    type="text"
                    value={editUser.name || ''}
                    onChange={(e) =>
                      setEditUser({ ...editUser, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editUser && editUser._id === user._id ? (
                  <input
                    type="text"
                    value={editUser.lastName || ''}
                    onChange={(e) =>
                      setEditUser({ ...editUser, lastName: e.target.value })
                    }
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editUser && editUser._id === user._id ? (
                  <input
                    type="email"
                    value={editUser.email || ''}
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editUser && editUser._id === user._id ? (
                  <input
                    type="text"
                    value={editUser.phone || ''}
                    onChange={(e) =>
                      setEditUser({ ...editUser, phone: e.target.value })
                    }
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editUser && editUser._id === user._id ? (
                  <input
                    type="date"
                    value={editUser.dateOfBirth || ''}
                    onChange={(e) =>
                      setEditUser({ ...editUser, dateOfBirth: e.target.value })
                    }
                  />
                ) : (
                  new Date(user.dateOfBirth).toLocaleDateString()
                )}
              </td>

              <td>
                {editUser && editUser._id === user._id ? (
                  <select
                    value={editUser.role}
                    onChange={(e) =>
                      setEditUser({ ...editUser, role: e.target.value })
                    }
                  >
                    <option value="student">Estudiante</option>
                    <option value="admin">Administrador</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editUser && editUser._id === user._id ? (
                  <button onClick={() => handleEditUser(user._id)}>
                    Guardar
                  </button>
                ) : (
                  <button onClick={() => handleEdit(user)}>Editar</button>
                )}
                <button onClick={() => handleDeleteUser(user._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;