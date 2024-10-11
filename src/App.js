import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Login';
import Signup from './components/Signup';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/category/:category" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;