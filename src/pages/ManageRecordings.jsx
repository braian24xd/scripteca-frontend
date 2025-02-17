import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageRecordings = () => {
  const [recordings, setRecordings] = useState([]);
  const [newRecording, setNewRecording] = useState({
    title: "",
    description: "",
    url: "",
    date: "", // Nuevo campo para la fecha
  });
  const [editRecording, setEditRecording] = useState(null);

  const fetchRecordings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/recordings", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Convertimos la fecha en un formato legible antes de guardarla en el estado
      const formattedRecordings = response.data.map((rec) => ({
        ...rec,
        formattedDate: rec.createdAt
          ? new Date(rec.createdAt).toLocaleDateString("es-ES")
          : "Fecha no disponible",
      }));

      setRecordings(formattedRecordings);
    } catch (error) {
      console.error("Error fetching recordings:", error);
    }
  };

  const handleAddRecording = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/recordings", newRecording, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchRecordings();
      setNewRecording({ title: "", description: "", url: "", date: "" });
    } catch (error) {
      console.error("Error adding recording:", error);
    }
  };

  const handleEditRecording = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/recordings/${id}`, editRecording, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchRecordings();
      setEditRecording(null);
    } catch (error) {
      console.error("Error editing recording:", error);
    }
  };

  const handleDeleteRecording = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/recordings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchRecordings();
    } catch (error) {
      console.error("Error deleting recording:", error);
    }
  };

  useEffect(() => {
    fetchRecordings();
  }, []);

  return (
    <div>
      <h2>Gestionar Grabaciones</h2>

      {/* Formulario para agregar nueva grabación */}
      <div>
        <h3>Agregar Nueva Grabación</h3>
        <input
          type="text"
          placeholder="Título"
          value={newRecording.title}
          onChange={(e) => setNewRecording({ ...newRecording, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Descripción"
          value={newRecording.description}
          onChange={(e) => setNewRecording({ ...newRecording, description: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="URL del video"
          value={newRecording.url}
          onChange={(e) => setNewRecording({ ...newRecording, url: e.target.value })}
          required
        />
        <input
          type="date"
          value={newRecording.date}
          onChange={(e) => setNewRecording({ ...newRecording, date: e.target.value })}
          required
        />
        <button onClick={handleAddRecording}>Agregar</button>
      </div>

      {/* Lista de grabaciones */}
      <h3>Lista de Grabaciones</h3>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recordings.map((recording) => (
            <tr key={recording._id}>
              <td>
                {editRecording && editRecording._id === recording._id ? (
                  <input
                    type="text"
                    value={editRecording.title}
                    onChange={(e) =>
                      setEditRecording({ ...editRecording, title: e.target.value })
                    }
                  />
                ) : (
                  recording.title
                )}
              </td>
              <td>
                {editRecording && editRecording._id === recording._id ? (
                  <textarea
                    value={editRecording.description}
                    onChange={(e) =>
                      setEditRecording({ ...editRecording, description: e.target.value })
                    }
                  ></textarea>
                ) : (
                  recording.description
                )}
              </td>
              <td>{recording.formattedDate}</td>
              <td>
                {editRecording && editRecording._id === recording._id ? (
                  <button onClick={() => handleEditRecording(recording._id)}>Guardar</button>
                ) : (
                  <button onClick={() => setEditRecording(recording)}>Editar</button>
                )}
                <button onClick={() => handleDeleteRecording(recording._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRecordings;