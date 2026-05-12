import { createContext, useState, useEffect } from "react";
import authService from "@api/authService";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkSession = async () => {
            try {
                const userData = await authService.validateSession()
                setUser(userData)
            } catch (err) {
                setUser(null)
            } finally {
                setIsLoading(false)
            }
        }
        checkSession()
    }, [])

    const login = async (credentials) => {
        try {
            const response = await authService.login(credentials)
            const data = await response.data
            setUser(data)
            return data
        } catch (err) {
            throw err
        }
    }

    const logout = async () => {
        try {
            await authService.logout()
        } catch (err) {
            console.error("Error en el servidor")
        } finally {
            setUser(null)
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
