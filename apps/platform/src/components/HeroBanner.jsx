import '@styles/components/atomicHero.scss'
import Button from './ui/Button'
import scriptecaLogo from '@assets/img/logo.png'
import { FaReact } from "react-icons/fa"
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const AtomicHero = () => {
    return (
        <section className="atomic-hero">
            <div className="hero-content">
                <h1 className="text-display">Domina el código en la Scripteca</h1>
                <p className="text-body">
                    Menos teoría, más despliegue. El HUB donde las ideas se vuelven software.
                </p>
                <Button variant="glow">
                    Quiero inscribirme
                </Button>
            </div>
            <div className="atomic-container">
                <div className="nucleus">
                    <img src={scriptecaLogo} alt="Scripteca Core" className="nucleus__logo" />
                    <div className="nucleus__glow"></div>
                </div>
                <div className="orbit orbit--1">
                    <div className="electron electron--react">
                        <FaReact />
                    </div>
                </div>
                <div className="orbit orbit--2">
                    <div className="electron electron--js">
                        <FaJs />
                    </div>
                </div>
                <div className="orbit orbit--3">
                    <div className="electron electron--node">
                        <FaNodeJs />
                    </div>
                </div>
                <div className="orbit orbit--4">
                    <div className="electron electron--sass">
                        <FaSass />
                    </div>
                </div>
                <div className="orbit orbit--5">
                    <div className="electron electron--html">
                        <FaHtml5 />
                    </div>
                </div>
                <div className="orbit orbit--6">
                    <div className="electron electron--css">
                        <FaCss3 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtomicHero;