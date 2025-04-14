import React, { useEffect, useState } from 'react';
import '../styles/TableReserved.css';

const TableReserved = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // Replace with your real backend endpoint
        const response = await fetch('http://localhost:5000/api/reservations');
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div id='reserved' className="table-reserved-container">
      <h2 className="section-title">🍴 Reserved Tables</h2>

      {loading ? (
        <div className="loading-spinner">Fetching reservations...</div>
      ) : reservations.length === 0 ? (
        <p className="no-data">No reservations yet.</p>
      ) : (
        <div className="reservation-grid">
          {reservations.map((res) => (
            <div key={res._id} className="reservation-card">
              <h3>{res.name}</h3>
              <p><strong>Email:</strong> {res.email}</p>
              <p><strong>Phone:</strong> {res.phone}</p>
              <p><strong>Date:</strong> {res.date}</p>
              <p><strong>Time:</strong> {res.time}</p>
              <p><strong>Table Type:</strong> {res.tableType}</p>
              <p><strong>No. of Tables:</strong> {res.noOfTables}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableReserved;
