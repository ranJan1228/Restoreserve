import React, { useState } from 'react';
import '../styles/ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: '2-seater',
    count: 1,
    email: '',
    phone: ''
  });

  const [availableTables, setAvailableTables] = useState({
    '2-seater': 5,
    '4-seater': 3,
    '6-seater': 2
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const type = formData.type;
    if (availableTables[type] >= formData.count) {
      setAvailableTables(prev => ({
        ...prev,
        [type]: prev[type] - parseInt(formData.count)
      }));
      alert('🍽️ Reservation successful!');
    } else {
      alert('❌ Not enough tables available!');
    }
  };

  return (
    <div id='reserve' className="reservation-container">
      <form onSubmit={handleSubmit} className="reservation-form">
        <h2 className="form-title">Reserve Your Table</h2>

        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" placeholder='Full Name' onChange={handleChange} required />
        </div>


        <div className="form-group">
          <label>Date</label>
          <input name="date" type="date" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input name="time" type="time" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Table Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            {Object.keys(availableTables).map(type => (
              <option key={type} value={type}>
                {type} (Available: {availableTables[type]})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>No. of Tables</label>
          <input
            type="number"
            name="count"
            min="1"
            placeholder='0'
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91XXXXXXXXXX"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;