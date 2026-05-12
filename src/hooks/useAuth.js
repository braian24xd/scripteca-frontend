import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const useAuth = () => {
    const userContext = useContext(AuthContext)

    if (!userContext) {
        throw new Error("useAuth debe ser utilizado dentro de AuthProvider")
    }
    return userContext
}

export default useAuth