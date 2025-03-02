import { useNavigationContainerRef } from "expo-router"
import React, { createContext, useCallback, useContext, useState } from "react"

const ThemeContext = createContext("")

const ThemeContextProvider = ({children}) =>
{
    const [theme, setTheme] = useState("light")
    const toggleTheme = useCallback(() => theme === 'light' ? setTheme('dark') : setTHeme('light'))

    return (
        <>
            <ThemeContext.Provider value={[theme, toggleTheme]}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeContextProvider

export const useTheme = () => useContext(ThemeContext)