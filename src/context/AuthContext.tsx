import { createContext, useContext, useState, type ReactNode } from "react";

// 1. Shape of what the context holds
type AuthContextType = {
name?:string;
  isUserAuth: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

// 2. Create the context (undefined = "no provider above me")
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Provider component — holds the actual state
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [username, setUsername] = useState("");

  const login = (name: string) => {
    setUsername(name);
    setIsUserAuth(true);
  };

  const logout = () => {
    setUsername("");
    setIsUserAuth(false);
  };

  const value: AuthContextType = {isUserAuth, username, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 4. Custom hook — so consumers never touch createContext directly
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}