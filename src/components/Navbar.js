import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <a href="/" className="logo">NourishNest</a>
      <ul className="nav-items">
      <li className="nav-item">
      <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <a href="/fitness" className="nav-link">About us</a>
        </li>
        <li className="nav-item">
          <a href="/nutrition" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <Link to="/faq"className="nav-link">FAQs</Link>
        </li> 
       
        <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact us</Link>
        </li>
        <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
        </li>
      </ul>
      <button className="button"><Link to="/signup"> Sign up</Link></button>
      <button className="button"><Link to="/login"> Login</Link></button>
    </nav>
  );
};

export default Navbar;

