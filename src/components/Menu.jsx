import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch meals from TheMealDB API
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data.meals || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div id="menu" style={{ padding: '2rem' }}>
      <h2 style={{ color: 'whitesmoke', textAlign: 'center', marginTop:'2rem', fontSize:'2rem' }}>Our Menu</h2>
      {loading ? (
        <p style={{ color: '#fff', textAlign: 'center' }}>Loading menu...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.2rem',
          marginTop: '2rem'
        }}>
          {menuItems.map((item) => (
            <div key={item.idMeal} style={{
              backgroundColor: '#222',
              padding: '1rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'whitesmoke' }}>{item.strMeal}</h3>
              <p style={{ color: '#f57c00' }}>{item.strCategory}</p>
              <img src={item.strMealThumb} alt={item.strMeal} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
