import Button from './ui/Button'
import '../css/components/continueLearning.scss'
import imageSection from "@assets/img/continueLearningImage.png"
import ProgressBar from './ui/ProgressBar'
import Badge from './ui/Badge'
import { FaPlay } from "react-icons/fa";

const ContinueLearning = () => {

    return (
        <article className="continueLearning">
            <div className="continueLearning__caption">
                <h2 className="continueLearning__caption--title">Crea tu sitio web como un profesional, paso a paso</h2>
                <div className="continueLearning__caption--info">
                    <span>Modulo 3</span>
                    <span>-</span>
                    <span>Clase 5</span>
                </div>
                <div className="continueLearning__caption--details">
                    <Badge>1 Mes</Badge>
                    <Badge>Curso Practico</Badge>
                    <Badge>Acceso de por vida</Badge>
                </div>
                <ProgressBar />
                <Button variant="ghost"><FaPlay size="0.9em" />Continuar</Button>
            </div>
            <div className="continueLearning__img">
                <img src={imageSection} />
            </div>
        </article>
    )
}

export default ContinueLearning