import { createContext, useContext, useState, type ReactNode } from "react";
const UserContext = createContext<any>(undefined);
export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("Check");
    
  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
}
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

