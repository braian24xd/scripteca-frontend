import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecordingsDashboard = () => {
  const [recordings, setRecordings] = useState([]);
  const [error, setError] = useState('');
  const user = token ? jwtDecode(token) : null;

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/recordings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecordings(response.data);
      } catch (err) {
        setError('No se pudieron cargar las grabaciones. Verifica tu autenticación.');
      }
    };

    fetchRecordings();
  }, []);

  return (
    <>
      <div className="recordings-dashboard">
        <h1>Tus Grabaciones</h1>
        {error && <p className="error">{error}</p>}
        <ul>
          {recordings.length > 0 ? (
            recordings.map((recording) => (
              <li key={recording._id}>
                <h2>{recording.title}</h2>
                <p>{recording.description}</p>
              </li>
            ))
          ) : (
            <p>No hay grabaciones disponibles.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default RecordingsDashboard;