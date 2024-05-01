import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">LPU Hangouts</h1>
      <ul class="navbar-menu">
  
  <li class="home"><Link to="/home">Menu</Link></li> 
  <li class="menu"><Link to="/MenuPage">Home</Link></li> 
  <li class="slotpage"><Link to="/slotpage">Book slot</Link></li> 
</ul>

    </nav>
  );
}

export default Navbar;
