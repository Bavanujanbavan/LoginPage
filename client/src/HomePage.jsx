import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(navigate);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default HomePage;
