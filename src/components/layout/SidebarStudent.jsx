import ButtonIcon from '../ButtonIcon'
import logo from '../../assets/img/scripteca.png'

import { LuLayoutDashboard } from "react-icons/lu";

const SidebarStudent = () => {

    return (
        <aside className='sidebarStudent'>
            <section className="sidebarStudent__header">
                {/* <img src={logo} alt="La Scripteca logo" width="50" /> */}
            </section>
            <section className='sidebarStudent__body'>
                <section className='sidebarStudent__body--options'>
                    <ButtonIcon
                        icon={<LuLayoutDashboard />}
                        caption="Tablero"
                     />
                </section>
            </section>
            <section className='sidebarStudent__footer'>

            </section>
        </aside>
    )
}

export default SidebarStudent