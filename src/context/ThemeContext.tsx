import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
	themeColor: string;
	changeThemeColor: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [themeColor, setThemeColor] = useState<string>("Light");

	const changeThemeColor = () => {
		setThemeColor((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
	}

	return(
		<ThemeContext.Provider value={{ themeColor, changeThemeColor }}>
			{ children }
		</ThemeContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}