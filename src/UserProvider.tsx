import { createContext,useState, ReactNode, useContext } from "react";

type UserContextType = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
};

type User = {
  name:string,
  email:string,
  phone:string,
  password:string
};

export const UserContext = createContext<UserContextType | null>(null);


export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};

export default function UserProvider({children}: { children: ReactNode }){
  const [user , setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}