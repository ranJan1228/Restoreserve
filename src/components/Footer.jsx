import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" style={{
      backgroundColor: '#1c1c1c',
      padding: '2rem',
      marginTop: '3rem',
      textAlign: 'center',
      color:'white'
    }}>
      <p>&copy; {new Date().getFullYear()} RestoReserve. All rights reserved.</p>
      <p>Contact: support@RestoReserve.com | +91 95088 27521</p>
    </footer>
  );
};

export default Footer;
