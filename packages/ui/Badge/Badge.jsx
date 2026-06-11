import './Badge.scss'

const Badge = ({ children, variant }) => {

    return (
        <span className={`badge badge--${variant}`}>
            {children}
        </span>
    )
}

export default Badge