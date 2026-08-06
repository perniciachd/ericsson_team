import { createContext, useContext,useState, type ReactNode } from "react";

const UserContext = createContext<any>(undefined);
export function UserProvider({ children }: { children: ReactNode }) {
// let name = "vijetha"
//   const value = { name};
const [name, setName] = useState("Dark");
  return <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>;
}
export function useUser()
{
    const ctx=useContext(UserContext);
    if(!ctx)
    {
        throw new Error("useUser must be used within a <UserProvider>");
    }
    return ctx;
}