'use client';
import { useRouter } from "next/navigation";

import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const router = useRouter()

    const [currentuser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [userLoggedIn, setUserLoggedIn] = useState(currentuser != null)

    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem("user")
        setUserLoggedIn(false)
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/login")
    }

    return (
        <UserContext.Provider value={{
            currentuser, setCurrentUser, userLoggedIn, setUserLoggedIn, logout
        }}>
            {children}
        </UserContext.Provider>
    )

}
const useUserContext = () => useContext(UserContext)
export default useUserContext;