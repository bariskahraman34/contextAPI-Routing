import { createContext,useState, ReactNode } from "react";

type UserContextType = {
  user: User | null ,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
};

type User = {
  name:string,
  email:string,
  phone:string,
  password:string
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({children}: { children: ReactNode }){
  const [user , setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}