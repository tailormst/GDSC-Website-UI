import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => {
        setThemeMode("dark");
    };

    const lightTheme = () => {
        setThemeMode("light");
    };

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
