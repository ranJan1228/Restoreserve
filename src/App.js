import React, { useState } from 'react';
import OwnerLogin from './components/Auth/OwnerLogin';
import UserLogin from './components/Auth/UserLogin';
import './styles/global.css';
import chefImg from './assets/chef.jpg';
import userImg from './assets/user.webp';
// import ReservationList from './components/ReservationList.js';
const App = () => {
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (userType === 'owner' && !isLoggedIn)
    return <OwnerLogin onLogin={() => setIsLoggedIn(true)} />;

  if (userType === 'user' && !isLoggedIn)
    return <UserLogin onLogin={() => setIsLoggedIn(true)} />;

  if (userType === 'user' && isLoggedIn)
    return <ReservationList />;

  return (
    <div className="app-container">
      <h1 className="app-title">Restaurant Reservation System 🍽️</h1>

      <div className="login-selection">
        <div className="login-box">
          <img src={chefImg} alt="Chef" className="login-image" />
          <button className="login-button owner-btn" onClick={() => setUserType('owner')}>
            Sign in as Restaurant
          </button>
        </div>

        <div className="login-box">
          <img src={userImg} alt="User" className="login-image" />
          <button className="login-button user-btn" onClick={() => setUserType('user')}>
            Sign in as User
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
