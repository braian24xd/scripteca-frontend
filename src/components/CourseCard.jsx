import '../css/courseCard.css'

const CourseCard = ({ img, title, description, link }) => {

    return (
        <article className="course">
            <img className="course__img" src={img} alt="" />
            <section className="course__content">
                <h3 className="course__content--title">{title}</h3>
                <p className="course__content--description">{description}</p>
                <a className="course__content--button" href={link}>Ver detalles</a>
            </section>
        </article>
    )
}

export default CourseCard