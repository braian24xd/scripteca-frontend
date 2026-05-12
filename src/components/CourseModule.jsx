import clsx from "clsx"
import Accordion from "./ui/Accordion"
import ProgressBar from "./ui/ProgressBar"
import '@styles/components/CourseModule.scss'
import { FaCheckCircle } from "react-icons/fa"
import { RiProgress8Fill } from "react-icons/ri";
import { TbLock } from "react-icons/tb";



const CourseModule = ({ type }) => {

    const courseModuleClasses = clsx(
        type ? `course-module--${type}` : ''
    )

    const ModuleIcon = ({ status }) => {
        if (status === 'progress') return <RiProgress8Fill size="31px" color="#A48CFF" />
        if (status === 'success') return <FaCheckCircle size="2em" color="#2DFF82" />
        if (status === 'blocked') return <TbLock size="31px" color="#8A8A8A" />
    }

    return (
        <section className={`course-module ${courseModuleClasses}`}>
            <section></section>
            <Accordion>
                <Accordion.Trigger>
                    <div className="course-module__caption">
                        <section className="course-module__caption__icon">
                            <ModuleIcon status={type} />
                            <div className="course-module__caption__icon--efects">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </section>
                        <section className="course-module__caption__items">
                            <small className="course-module__caption__items--module">Módulo 1</small>
                            <h4 className="course-module__caption__items--title">Primeros pasos</h4>
                            <div className="course-module__caption__items--progress">
                                <small>5/5 Clases</small>
                                <ProgressBar value={44} type="simple" variant="purple-200" h="7px" />
                            </div>
                        </section>
                    </div>
                </Accordion.Trigger>
            </Accordion>
        </section>
    )
}

export default CourseModule