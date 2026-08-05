import{createContext, type ReactNode} from "react";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider =  ({ children }: { children: React.ReactNode }) => {
    let name = "Shivali";
    const value = name;
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}