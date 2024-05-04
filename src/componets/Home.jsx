import React from 'react';

function HomePage() {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '50px'
  };

  const headingStyle = {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginTop: '0'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My React Application</h1>
      <p style={paragraphStyle}>To use this application, you must first log in. Only then can you access the DashBoard content.</p>
    </div>
  );
}

export default HomePage;
