import '@styles/components/communitySection.scss'
const CommunitySection = () => {
    const profiles = [
    {
      id: "entrepreneurs",
      tag: "Perfil Estrella",
      icon: "💡",
      title: "Emprendedores Digitales",
      desc: "Dueños de negocio que buscan independencia técnica para lanzar y escalar sus propias plataformas sin depender de terceros.",
      size: "large",
      color: "blue",
    },
    {
      id: "job-seekers",
      icon: "📈",
      title: "Mejora Laboral",
      desc: "Profesionales que quieren actualizar su stack tecnológico para aspirar a mejores vacantes.",
      size: "standard",
      color: "green",
    },
    {
      id: "hobbyists",
      icon: "🎨",
      title: "Apasionados",
      desc: "Personas que ven en la programación una herramienta creativa para dar vida a sus ideas.",
      size: "standard",
      color: "purple",
    },
    {
      id: "juniors",
      icon: "🚀",
      title: "Nuevos Talentos (Juniors)",
      desc: "Estudiantes que buscan una base sólida y profesional para entrar con el pie derecho a la industria tech con proyectos reales.",
      size: "wide",
      color: "cyan",
    },
  ]
  return (
      <section className="student-bento">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">COMUNIDAD</span>
            <h2 className="text-display">¿Para quién es la Scripteca?</h2>
          </div>

          <div className="bento-grid">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`bento-card bento-card--${profile.size} bento-card--${profile.color}`}
              >
                {profile.tag && <div className="bento-tag">{profile.tag}</div>}

                <div className="bento-content">
                  <span className="icon-box">{profile.icon}</span>
                  <div className="text-box">
                    <h3>{profile.title}</h3>
                    <p>{profile.desc}</p>
                  </div>
                </div>
                <div className="bento-blueprint-bg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default CommunitySection