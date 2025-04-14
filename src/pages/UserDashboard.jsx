import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReservationForm from '../components/ReservationForm';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <ReservationForm />
      <Footer />
    </>
  );
};

export default UserDashboard;
