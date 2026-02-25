import '@styles/components/userButton.scss'

const UserButton = ({ initialLetter }) => {

    return (
        <div className="profile-button text">
            <div className="icon-container">
                <span>{initialLetter || 'U'}</span>
            </div>
        </div>
    )
}

export default UserButton