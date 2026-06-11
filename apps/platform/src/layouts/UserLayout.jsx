import { Outlet } from 'react-router-dom'
import AppHeader from "@components/layout/AppHeader"
import NavBottom from "@components/layout/NavBottom"

const UserLayout = () => {

    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <NavBottom />
        </>
    )
}

export default UserLayout