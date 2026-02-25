import '@styles/components/badge.scss'

const Badge = ({ children, style }) => {

    return (
        <section className="badge" style={style}>
            {children}
        </section>
    )
}

export default Badge