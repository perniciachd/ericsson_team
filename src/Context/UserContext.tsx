import {createContext, useContext, useState} from "react";

export const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [userName, setUser] = useState("");
    console.log("UserProvider rendered with userName:", userName);
    return (
        <UserContext.Provider value={{ userName, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
