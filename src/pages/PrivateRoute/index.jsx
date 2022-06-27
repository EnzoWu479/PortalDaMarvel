import React from "react";
import { Route, Navigate } from "react-router";


const PrivateRoute = ({path, logged}, props) => (
    logged ? <Route {...props}/> : <Navigate to="login"/>
);
export default PrivateRoute;