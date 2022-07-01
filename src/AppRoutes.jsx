import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Movies from './pages/Movies';
import Login from './pages/Login';
import Home from './pages/Home';
import Comics from './pages/Comics';
import NoPage from './pages/NoPage';
import { AuthProvider, AuthContext } from './contexts/auth';

function AppRoutes() {
  function Private({ children }) {
    const { authenticated, loading } = useContext(AuthContext);
  
    if (loading) {
      return <div>Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  Private.propTypes = {
    children: propTypes.element.isRequired,
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Private><Home /></Private>} />
          <Route exact path="/filmes" element={<Private><Movies /></Private>} />
          <Route exact path="/hqs" element={<Private><Comics /></Private>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default AppRoutes;
