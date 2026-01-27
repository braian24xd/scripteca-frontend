import Button from '../ui/Button'
import logo from '@assets/img/scripteca.png'
import '@styles/components/layouts/appHeader.scss'
import { FaUser } from "react-icons/fa";

const AppHeader = () => {

    return (
        <header className="appHeader">
            <div className="container">
                <img className="appHeader__logo" src={logo} alt="Scripteca" />
                <div className="profile-button">
    <div className="icon-container">
      <span>B</span>
    </div>
  </div>
            </div>
        </header>
    )
}

export default AppHeader