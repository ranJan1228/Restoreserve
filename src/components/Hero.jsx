import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: '2rem 2rem',
        borderRadius: '10px'
      }}>
        Welcome to RestoReserve 🍴 <br />
        Reserve your seat now!
      </h1>
    </div>
  );
};

export default Hero;
