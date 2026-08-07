import React, { createContext, type ReactNode } from "react";
const UserContext = createContext<any>(undefined);
export function UserProvider({ children }: { children: ReactNode }) {

  const [name, setName] = React.useState('John Doe'); // Replace with your actual user data or logic to fetch user data
  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;

}
export function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}