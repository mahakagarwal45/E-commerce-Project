import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <a href="/" className="logo">NourishNest</a>
      <ul className="nav-items">
      <li className="nav-item">
          <a href="/fitness" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/fitness" className="nav-link">About us</a>
        </li>
        <li className="nav-item">
          <a href="/nutrition" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="/mental-wellbeing" className="nav-link">FAQs</a>
        </li>
        <li className="nav-item">
          <a href="/shop" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact us</a>
        </li>
      </ul>
      <button className="button">Sign Up</button>
      <button className="button">Login</button>
    </nav>
  );
};

export default Navbar;

