import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#151515',
      padding: '0.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h2 style={{ color: '#f57c00', fontSize:'2rem' }}>RestoReserve</h2>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><a href="#reserve" style={{ color: 'white', textDecoration:'none'}}>Reserve</a></li>
        <li><a href="#menu" style={{ color: 'white', textDecoration:'none'}}>Menu</a></li>
        <li><a href="#footer" style={{ color: 'white', textDecoration:'none'}}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
