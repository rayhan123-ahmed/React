import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState({
      name: "bruce",
      role: "Admin",
      theme: "dark",
    });

    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}