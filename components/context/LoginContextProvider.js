import React, { createContext, useContext, useReducer, useState } from "react"

const LoginContext = createContext(null)
const LoginDispatchContext = createContext(null)

const NullUser = {name: "NoUser", id: "0F0F"}

const LoginContextProvider = ({children}) =>
{
    const [user, dispatch] = useReducer(handler, NullUser)

    return (
        <>
            <LoginContext.Provider value={user}>
                <LoginDispatchContext.Provider value={dispatch} >
                    {children}
                </LoginDispatchContext.Provider>
            </LoginContext.Provider>
        
        </>
    )
}

export default LoginContextProvider

export const useLogin = () => useContext(LoginContext)
export const useLoginDispatch = () => useContext(LoginDispatchContext)

const handler = (user, event) =>
{
    switch (event.type)
    {
        case "in":
            return event.user
        case "out":
            return NullUser
        default:
            console.log("User Dispatch called with default handler.")
            return user
            
    }
}