import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Navbar.css'; // Link to Navbar CSS
import './styles/Footer.css'; // Link to Footer CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);