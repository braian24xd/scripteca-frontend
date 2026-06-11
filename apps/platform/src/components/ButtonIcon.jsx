

const ButtonIcon = ({ icon, caption }) => {

    return (
        <button className="buttonIcon">
            <span>{icon}</span>
            <span>{caption}</span>
        </button>
    )
}

export default ButtonIcon