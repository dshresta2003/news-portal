import React from 'react';
import '../styles/Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2>Subscribe to Our Newsletter</h2>
      <form className="subscribe-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
