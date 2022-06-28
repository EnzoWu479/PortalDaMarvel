import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        const recoveredUser = localStorage.getItem("user");
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        };
        setLoading(false);
    }, []);

    const login = (user, password, saved) =>{
        console.log("login", {user, password});

        const loggedUser = {
            id: "123",
            user
        };

        if(user === "adm" && password==="password"){
            if(saved){
                localStorage.setItem("user", JSON.stringify(loggedUser))
            };
            setUser({loggedUser});
            navigate("/");
        };
    };
    const logout = () => {
        console.log("logout");
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login")
    }
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}