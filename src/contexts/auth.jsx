import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (user, password, saved) => {
    const loggedUser = {
      id: '123',
      user,
    };
    if (user === process.env.REACT_APP_ACCOUNT && password === process.env.REACT_APP_PASSWORD) {
      if (saved) {
        localStorage.setItem('user', JSON.stringify(loggedUser));
      }
      setUser({ loggedUser });
      navigate('/');
    } else {
      return false;
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <AuthContext.Provider value={{
      authenticated: !!user, user, loading, login, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

