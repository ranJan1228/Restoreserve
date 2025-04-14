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
        <li><a href="#registered" style={{ color: 'white', textDecoration:'none'}}>Registered Users</a></li>
        <li><a href="#reserved" style={{ color: 'white', textDecoration:'none'}}>Table Reserved</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
