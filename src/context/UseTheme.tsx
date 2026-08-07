import { createContext, useContext, useState, type ReactNode } from "react";

const ThemeContext = createContext<any>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const Theme = () => {
    document.documentElement.classList.toggle("dark");
    setDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ dark, Theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }

  return ctx;
}

export default useTheme;