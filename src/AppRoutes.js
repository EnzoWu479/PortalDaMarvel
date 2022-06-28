import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import React, {useContext} from "react";
import Filmes from "./pages/Filmes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hq from "./pages/HQs";
import NoPage from "./pages/NoPage";
import { AuthProvider, AuthContext } from "./contexts/auth";


const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div>Carregando...</div>
        }
        if(!authenticated){
            return <Navigate to="/login"/>
        };
        return children;
    };
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/" element={<Private><Home /></Private>}/>
                    <Route exact path="/filmes" element={<Private><Filmes/></Private>}/>
                    <Route exact path="/hqs" element={<Private><Hq/></Private>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}
export default AppRoutes;