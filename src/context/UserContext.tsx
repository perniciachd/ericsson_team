import { createContext, useContext, useState, type ReactNode } from "react";

const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setName]=useState("ABC");
  const changeName = (val:any)=>{
    setName(val);
  }
  const value = { name, changeName};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}