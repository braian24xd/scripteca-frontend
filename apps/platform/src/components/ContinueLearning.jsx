import Button from './ui/Button'
import '../css/components/continueLearning.scss'
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
                    <Badge>Curso en progreso</Badge>
                </div>
                <ProgressBar value={63} />
                <Button variant="glow"><FaPlay size="0.9em" />Continuar</Button>
            </div>
            <div className="continueLearning__img">
                <img />
            </div>
        </article>
    )
}

export default ContinueLearning