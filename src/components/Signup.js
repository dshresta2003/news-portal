import React from 'react';

const Signup = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '12.5rem', fontSize: '20px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '2rem auto'}}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Create Your Account</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }} placeholder="Full Name" required />
        <input type="email" style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }} placeholder="Email" required />
        <input type="password" style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }} placeholder="Password" required />
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
