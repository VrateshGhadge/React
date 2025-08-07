import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

//previous project mai 2 file mai kaam kia tha esmai 1 he file mai kaam kai hai [production mai aksar aaise he hota hai]