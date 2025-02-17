import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import '../css/studentRecordings.css'

const StudentRecordings = () => {
  const [recordings, setRecordings] = useState([]);
  const [selectedRecording, setSelectedRecording] = useState(null);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const fetchRecordings = async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/api/recordings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
 
      setRecordings(response.data);
    } catch (error) {
      console.error('Error fetching recordings:', error);
    }
  };

  useEffect(() => {
    fetchRecordings();
  }, []);

  return (
    <section className="student__dashboard">
      <section className='recordings'>
        <section className='recording__group'>
        <h2>Tus Grabaciones</h2>
          {recordings.map((recording) => (
            <article
              className='recording__item'
              key={recording._id}
              onClick={() => setSelectedRecording(recording)}
            >
              <h3>{recording.title}</h3>
              <p>{formatDate(recording.date)}</p>
              <p>{recording.description}</p>
            </article>
          ))}
        </section>
        <section className='recording__video'>
          {selectedRecording && (
            <VideoPlayer
              videoUrl={selectedRecording.url}
              title={selectedRecording.title}
              description={selectedRecording.description}
            />
          )}
        </section>
      </section>
    </section>
  );
};

export default StudentRecordings;