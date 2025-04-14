import React, { useState } from 'react';
import OwnerDashboard from '../../pages/OwnerDashboard'
import './UserLogin.css';

const OwnerLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) return <OwnerDashboard />;

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-box">
        <div className="login-avatar">
          🍽️
        </div>
        <h2 className="login-title">Welcome to the Restaurant Admin Panel 🍽️</h2>
        <input type="email" placeholder="Email ID" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button
            className="forgot-link"
            onClick={() => alert('Redirect to password recovery')}
          >
            Forgot Password?
          </button>
        </div>
        <button className="login-button" onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};

export default OwnerLogin;
