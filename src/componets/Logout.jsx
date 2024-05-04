// Logout.js
import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Implement logout logic here, for example, clear user session
    onLogout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Logout;
