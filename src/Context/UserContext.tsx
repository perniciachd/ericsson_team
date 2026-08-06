import {createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext<any>(undefined);
export const ThemeContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [userName, setUser] = useState("");
    console.log("UserProvider rendered with userName:", userName);
    return (
        <UserContext.Provider value={{ userName, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        try {
            localStorage.setItem("theme", darkMode ? "dark" : "light");
        } catch (e) {
            // ignore storage errors
        }

        if (typeof document !== "undefined") {
            const body = document.body;
            if (darkMode) {
                body.classList.add("dark-theme");
                body.classList.remove("light-theme");
                body.setAttribute("data-theme", "dark");
            } else {
                body.classList.remove("dark-theme");
                body.classList.add("light-theme");
                body.setAttribute("data-theme", "light");
            }
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((v) => !v);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
export function useUserContext() {
    return useContext(UserContext);
}
