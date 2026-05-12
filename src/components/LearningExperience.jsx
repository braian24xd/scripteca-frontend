import React from 'react';
import '@styles/components/learningExperience.scss';
import { RiLiveLine } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

const LearningExperience = () => {
  return (
    <section className="learning-experience">
      <div className="container">
        <h2 className="text-display">Tu experiencia de aprendizaje</h2>
        
        <div className="dashboard-preview">
          <div className="preview-container">
            <div className="browser-header">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <div className="preview-content">
              <div className="code-editor">
                <p><span className="keyword">const</span> scripteca = <span className="string">'Éxito'</span>;</p><br />
                <p><span className="keyword">function</span> aprender() {'{'}</p><br />
                <p className="indent">console.<span className="method">log</span>(<span className="string">'Dominando el código...'</span>);</p><br />
                <p>{'}'}</p>
              </div>
              <div className="floating-badge">
                <div className="badge-icon">🚀</div>
                <span>+15 Proyectos Reales</span>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <div className="benefit-item">
              <div className="icon icon--green"><RiLiveLine /></div>
              <div className="info">
                <h3>Clases en vivo</h3>
                <p>Sesiones interactivas en tiempo real con expertos de la industria.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon icon--yellow"><FaFolder /></div>
              <div className="info">
                <h3>Proyectos Prácticos</h3>
                <p>Construye tu portafolio mientras aprendes con casos reales.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon icon--blue"><FaLaptop /></div>
              <div className="info">
                <h3>Acceso de por vida</h3>
                <p>Repasa las lecciones y el contenido cuando lo necesites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;