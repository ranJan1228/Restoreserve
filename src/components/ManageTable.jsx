// ManageTable.jsx
import React, { useState } from 'react';
import '../styles/ManageTable.css';

const ManageTable = () => {
  const [tables, setTables] = useState({
    '2-seater': 5,
    '4-seater': 3,
    '6-seater': 2,
  });

  const [updatedTable, setUpdatedTable] = useState(null);

  const handleChange = (type, value) => {
    setTables({ ...tables, [type]: parseInt(value) });
  };

  const handleUpdate = (type) => {
    setUpdatedTable(type);
    setTimeout(() => setUpdatedTable(null), 2000);
  };

  return (
    <div className="manage-table-container">
      <h2 className="manage-table-title">Manage Your Tables</h2>
      <div className="table-form">
        {Object.entries(tables).map(([type, count]) => (
          <div key={type} className="table-row">
            <label className="table-label">{type}</label>
            <input
              type="number"
              value={count}
              min={0}
              onChange={(e) => handleChange(type, e.target.value)}
              className="table-input"
            />
            <button onClick={() => handleUpdate(type)} className="update-button">
              Update
            </button>
            {updatedTable === type && (
              <span className="update-msg">Updated!</span>
            )}
          </div>
        ))}
      </div>
      <p className="note">Changes are simulated. No backend connection yet.</p>
    </div>
  );
};

export default ManageTable;
