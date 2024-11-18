
import { useContext, createContext, useState,useEffect } from "react";

import { useRouter } from 'next/router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const router = useRouter();
  
    useEffect(() => {
      // Accédez au localStorage uniquement côté client
      if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("blogin-frontend-token");
        if (storedToken) {
          setToken(storedToken);
        }

        const storedUser = localStorage.getItem("blogin-frontend-user");
        if (storedUser) {
          setUser(storedUser);
        }
      }
    }, []);

  const loginAction = async (data) => {
//     try {
//       const response = await fetch("your-api-endpoint/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const res = await response.json();
//       if (res.data) {

            setUser(data.username)
            setToken("tokening");
     
         
        if(typeof window !== "undefined")
        {
            
            localStorage.setItem("blogin-frontend-user", data.username);
            localStorage.setItem("blogin-frontend-token", "tokening");
        }
        
        //  router.push("/dashboard");
        return true
//       }
//       throw new Error(res.message);
//     } catch (err) {
//       console.error(err);
//     }
   };

  const logOut = () => {
    setUser(null);
    setToken("");
    if(typeof window !== "undefined")
        {
            localStorage.removeItem("blogin-frontend-token");
            localStorage.removeItem("blogin-frontend-user");
        }
        
   
        router.push("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};