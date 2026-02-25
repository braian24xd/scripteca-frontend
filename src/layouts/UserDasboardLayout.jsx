import AppHeader from "../components/layout/AppHeader"
import StudentDashboard from "../components/studentDashboard"
import SidebarStudent from "../components/layout/SidebarStudent"
import NavBottom from "../components/layout/NavBottom"

const UserDashboardLayout = () => {

    return (
        <section>
            {/* <SidebarStudent /> */}
            <AppHeader />
            <StudentDashboard />
            <NavBottom />
        </section>
    )
}

export default UserDashboardLayout