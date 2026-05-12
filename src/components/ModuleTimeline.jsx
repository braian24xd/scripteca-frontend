import React, { useState } from 'react';
import '@styles/components/moduleTimeline.scss';
import { FaList } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const ModuleTimeline = ({ modulesData }) => {
    const [activeModule, setActiveModule] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);

    // Datos simulados en caso de no recibir datos por props
    const defaultModules = [
        {
            id: 1,
            title: "Módulo 1: Setup y Fundamentos",
            description: "Configuración del entorno de desarrollo y arquitectura base.",
            videos: [
                { id: 101, title: "01. Instalación y variables de entorno", duration: "45 min" },
                { id: 102, title: "02. Estructura de archivos y compilación", duration: "52 min" }
            ]
        },
        {
            id: 1,
            title: "Módulo 1: Setup y Fundamentos",
            description: "Configuración del entorno de desarrollo y arquitectura base.",
            videos: [
                { id: 101, title: "01. Instalación y variables de entorno", duration: "45 min" },
                { id: 102, title: "02. Estructura de archivos y compilación", duration: "52 min" }
            ]
        },
        {
            id: 1,
            title: "Módulo 1: Setup y Fundamentos",
            description: "Configuración del entorno de desarrollo y arquitectura base.",
            videos: [
                { id: 101, title: "01. Instalación y variables de entorno", duration: "45 min" },
                { id: 102, title: "02. Estructura de archivos y compilación", duration: "52 min" }
            ]
        },
        {
            id: 2,
            title: "Módulo 2: Arquitectura Pro",
            description: "Patrones de diseño y buenas prácticas con componentes.",
            videos: [
                { id: 201, title: "03. Creación de componentes modulares", duration: "60 min" },
                { id: 202, title: "04. Estado global y custom hooks", duration: "48 min" }
            ]
        }
    ];

    const modules = modulesData || defaultModules;

    return (
        <div className="module-timeline-container">
            {/* Selector de Módulos (Timeline Horizontal) */}
            <div className="timeline-header">
                {modules.map((mod, index) => (
                    <div
                        key={mod.id}
                        className={`timeline-node ${activeModule === index ? 'active' : ''}`}
                        onClick={() => setActiveModule(index)}
                    >
                        <div className="node-marker"></div>
                        <div className="node-info">
                            <span className="node-title">{mod.title}</span>
                            <p>{mod.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Grid de Contenido y Reproducción */}
            <div className="timeline-content-grid">
                <div className="video-selector-list">
                    <h3><FaList />
                        Contenido del Módulo</h3>
                    <div className="videos-grid">
                        {modules[activeModule].videos.map((video) => (
                            <div
                                key={video.id}
                                className={`video-item ${activeVideo?.id === video.id ? 'active' : ''}`}
                                onClick={() => setActiveVideo(video)}
                            >
                                <div className="video-icon">
                                    <FaPlayCircle />
                                </div>
                                <div className="video-details">
                                    <h4>{video.title}</h4>
                                    <span><FaClock /> {video.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reproductor / Visor del Video Seleccionado */}
                <div className="video-player-wrapper">
                    {activeVideo ? (
                        <div className="player-card">
                            <div className="player-header">
                                <h3>{activeVideo.title}</h3>
                                <span className="badge">4K OPTIMIZED</span>
                            </div>
                            <div className="player-screen">
                                <i className="fa-solid fa-circle-play play-icon"></i>
                                <p>Reproduciendo video encriptado en el HUB</p>
                            </div>
                            <div className="player-footer">
                                <button className="btn-note">
                                    <i className="fa-solid fa-pen"></i> Tomar nota
                                </button>
                                <button className="btn-resource">
                                    <i className="fa-solid fa-download"></i> Recursos
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="empty-player">
                            <i className="fa-solid fa-desktop"></i>
                            <p>Selecciona una lección para iniciar la terminal</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModuleTimeline;