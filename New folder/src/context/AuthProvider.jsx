import React, { createContext, useState } from 'react'


export const authContext = createContext();


function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState("")

    const updateUser = (user) => {
        setCurrentUser(user)
    }

    return (
        <authContext.Provider
            value={{ currentUser, updateUser }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
