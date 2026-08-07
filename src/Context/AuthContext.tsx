import { createContext, type ReactNode } from "react";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const value = "Shivali";
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};