import React, { useState, useEffect } from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
      <div className="navbar-logo">
        <img src="image/logo2.png" alt="logo" />
        <Link to="/">Tutor Track</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/signup" className="navbar-item">Signup</Link>
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/aboutus" className="navbar-item">About</Link> 
        <Link to="/topcities" className="navbar-item">Top Cities</Link> 
        <Link to="/courses" className="navbar-item">Courses</Link> 
        <Link to="/tutorjoin" className="navbar-item">Join As Tutor</Link> 
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
