import React, { useEffect, useState } from 'react';
import '../styles/RegisteredUsers.css';

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Update with your API endpoint
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div id='registered' className="registered-users-container">
      <h2 className="section-title">Registered Users</h2>

      {loading ? (
        <div className="loading-spinner">Loading users...</div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user._id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisteredUsers;
