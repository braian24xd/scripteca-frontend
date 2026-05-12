import '@styles/components/roadmapSection.scss'

const RoadmapSection = () => {

    return (
        <section className="container roadmap">
            <div className="roadmap__header">
                <span className="roadmap__header--caption">EL PROCESO</span>
                <h2 className="roadmap__header--title">Tu camino al dominio técnico</h2>
            </div>

            <div className="roadmap-flow">
                {/* Paso 1 */}
                <div className="step-node">
                    <div className="node-number">01</div>
                    <div className="node-content">
                        <h3>Inscríbete</h3>
                        <p>Acceso inmediato a la plataforma y materiales exclusivos.</p>
                    </div>
                    <div className="node-connector"></div>
                </div>

                <div className="step-node">
                    <div className="node-number">02</div>
                    <div className="node-content">
                        <h3>Crea</h3>
                        <p>
                            Construye el sitio de tu empresa paso a paso con mentoría.
                        </p>
                    </div>
                    <div className="node-connector"></div>
                </div>

                <div className="step-node">
                    <div className="node-number">03</div>
                    <div className="node-content">
                        <h3>Despliega</h3>
                        <p>Publica tu sitio web y empieza a recibir clientes reales.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection