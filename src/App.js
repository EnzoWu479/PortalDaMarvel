import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hq from "./pages/HQs";
import Filmes from "./pages/Filmes";
import NoPage from "./pages/NoPage";

import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  const [autenticado, setAutenticado] = useState(null);
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="filmes" element={<Filmes/>}/>
            <Route path="hqs" element={<Hq/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
