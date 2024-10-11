import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-categories">
        <h4>Categories</h4>
        <ul>
          <li><Link to="/category/general">General</Link></li>
          <li><Link to="/category/business">Business</Link></li>
          <li><Link to="/category/sports">Sports</Link></li>
          <li><Link to="/category/technology">Technology</Link></li>
          <li><Link to="/category/entertainment">Entertainment</Link></li>
          <li><Link to="/category/science">Science</Link></li>
          <li><Link to="/category/health">Health</Link></li>
        </ul>
      </div>
      <p>&copy; 2024 NewsPortal. All rights reserved.</p>
      <p>Contact Us | Privacy Policy | Terms of Service</p>
    </footer>
  );
};

export default Footer;