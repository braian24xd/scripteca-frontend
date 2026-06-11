import './HeroSection.scss'
import Button from '@scripteca/ui/Button'
import { Fragment } from 'react'
import scriptecaLogo from '@assets/logo.png'
import { FaReact, FaJs, FaNodeJs, FaSass, FaHtml5, FaCss3 } from 'react-icons/fa'

const ELECTRONS = [
    { modifier: 'react', orbit: 1, icon: <FaReact />,  label: 'React'      },
    { modifier: 'js',    orbit: 2, icon: <FaJs />,     label: 'JavaScript' },
    { modifier: 'node',  orbit: 3, icon: <FaNodeJs />, label: 'Node.js'    },
    { modifier: 'sass',  orbit: 4, icon: <FaSass />,   label: 'Sass'       },
    { modifier: 'html',  orbit: 5, icon: <FaHtml5 />,  label: 'HTML5'      },
    { modifier: 'css',   orbit: 6, icon: <FaCss3 />,   label: 'CSS3'       },
]

const STATS = [
    { value: '6',    unit: ' sem',  label: 'Duración'         },
    { value: '15',   unit: '',      label: 'Lugares por gen'  },
    { value: '+5',   unit: ' techs',label: 'Stack completo'   },
    { value: '100',  unit: '%',     label: 'Proyectos reales' },
]

const HeroBanner = () => {
    return (
        <section className="atomic-hero container">

            <div className="atomic-hero__glow atomic-hero__glow--left"  aria-hidden="true" />
            <div className="atomic-hero__glow atomic-hero__glow--right" aria-hidden="true" />

            <div className="hero-content">

                <div className="hero-badge" role="status" aria-label="Disponibilidad">
                    <span className="hero-badge__dot" aria-hidden="true" />
                    Próxima gen · Solo 15 lugares
                </div>

                <h1 className="hero-headline">
                    Tu negocio online.<br />
                    <span className="hero-headline__accent">Tu carrera en tech.</span>
                    <span className="hero-headline__line2">
                        Empieza aquí<span className="cursor-blink" aria-hidden="true" />
                    </span>
                </h1>

                <p className="hero-sub">
                    <strong>Sin relleno teórico.</strong> En 6 semanas construyes y despliegas
                    el sitio de tu empresa — o el primer eslabón de tu carrera como desarrollador web.
                </p>

                <p className="hero-price-anchor">
                    Una agencia cobra $8,000–$25,000 por un sitio.&nbsp;
                    <span className="hero-price-anchor__value">
                        Tú lo aprendes a hacer por $589.
                    </span>
                </p>

                <div className="hero-ctas">
                    <Button variant="glow">
                        Comenzar mi ruta →
                    </Button>
                    <Button variant="ghost">
                        Ver el programa completo
                    </Button>
                </div>

                <div className="hero-stats" aria-label="Datos del curso">
                    {STATS.map((s, i) => (
                        <Fragment key={s.label}>
                            {i > 0 && (
                                <div
                                    key={`div-${i}`}
                                    className="hero-stats__divider"
                                    aria-hidden="true"
                                />
                            )}
                            <div key={s.label} className="hero-stats__item">
                                <span className="hero-stats__value">
                                    <span>{s.value}</span>{s.unit}
                                </span>
                                <span className="hero-stats__label">{s.label}</span>
                            </div>
                        </Fragment>
                    ))}
                </div>

            </div>

            <div className="atomic-container" aria-hidden="true">

                {ELECTRONS.map(({ modifier, orbit, icon, label }) => (
                    <div key={modifier} className={`orbit orbit--${orbit}`}>
                        <div
                            className={`electron electron--${modifier}`}
                            data-label={label}
                            title={label}
                        >
                            {icon}
                        </div>
                    </div>
                ))}

                <div className="nucleus">
                    <div className="nucleus__glow" />
                    <div className="nucleus__logo">
                        {scriptecaLogo
                            ? <img src={scriptecaLogo} alt="Scripteca" style={{ width: '60%' }} />
                            : 'S'
                        }
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeroBanner