import React from 'react';
import '@styles/components/featuresImpact.scss';

const FeaturesImpact = () => {
  return (
    <section className="features-impact">
      <div className="impact-ticker">
        <div className="ticker-item"><span>+5</span> Tecnologías</div>
        <div className="ticker-divider"></div>
        <div className="ticker-item"><span>100%</span> Práctico</div>
        <div className="ticker-divider"></div>
        <div className="ticker-item"><span>+7</span> Proyectos</div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="subtitle">MÉTODO SCRIPTECA</span>
          <h2 className="text-display">¿Por qué aprender con nosotros?</h2>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card pillar-card--green">
            <div className="pillar-icon">{"</>"}</div>
            <h3>Code-First</h3>
            <p>Menos teoría aburrida, más terminal. Escribe código real desde el minuto uno.</p>
          </div>

          <div className="pillar-card pillar-card--blue">
            <div className="pillar-icon">{"{...}"}</div>
            <h3>Estructura Senior</h3>
            <p>Aprende patrones de diseño y arquitectura, no solo sintaxis. Piensa como arquitecto.</p>
          </div>

          <div className="pillar-card pillar-card--pink">
            <div className="pillar-icon">{"( )"}</div>
            <h3>Networking Real</h3>
            <p>Conéctate con una comunidad de desarrolladores y expertos de la industria.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesImpact;