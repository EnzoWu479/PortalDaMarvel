import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import AppRoutes from "./AppRoutes";
require("dotenv").config();
function App() {
  return (
    <div>
      <GlobalStyle/>
      <AppRoutes/>
    </div>
  );
}

export default App;
