import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('attendance-token');
    if (storedToken && !isTokenExpired(storedToken)) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (username, password, navigate) => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('attendance-token', token);
      setIsLoggedIn(true);
      setLoginError('');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 401) {
        setLoginError('Invalid username or password');
      }
    }
  };

  const handleLogout = (navigate) => {
    localStorage.removeItem('attendance-token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const isTokenExpired = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000;
      return expiry < Date.now();
    } catch (error) {
      console.error('Token expiration check failed:', error);
      return true; // Assume token is expired in case of an error
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} loginError={loginError} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
