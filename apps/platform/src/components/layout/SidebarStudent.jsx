import ButtonIcon from '../ButtonIcon'
import logo from '../../assets/img/scripteca.png'

import { LuLayoutDashboard } from "react-icons/lu";
import {
    FaUsers,
    FaFileVideo,
    FaLaptop,
    FaCreditCard
} from "react-icons/fa";

import { VscFileSubmodule } from "react-icons/vsc";

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
                     <ButtonIcon
                        icon={<FaUsers />}
                        caption="Usuarios"
                     />
                     <ButtonIcon
                        icon={<FaFileVideo />}
                        caption="Grabaciones"
                     />
                     <ButtonIcon
                        icon={<FaLaptop />}
                        caption="Cursos"
                     />
                     <ButtonIcon
                        icon={<VscFileSubmodule />}
                        caption="Modulos"
                     />
                     <ButtonIcon
                        icon={<FaCreditCard />}
                        caption="Pagos"
                     />
                </section>
            </section>
            <section className='sidebarStudent__footer'>

            </section>
        </aside>
    )
}

export default SidebarStudent