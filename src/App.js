import React, {useState} from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import AppRoutes from "./AppRoutes";
function App() {
  const [autenticado, setAutenticado] = useState(null);
  return (
    <div>
      <GlobalStyle/>
      <AppRoutes/>
    </div>
  );
}

export default App;
