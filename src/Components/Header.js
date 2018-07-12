import React from 'react';
import NavBar from './NavBar';
import './Header.css';

const Header = () => {
  return(
    <header className="header">
      <img src="assets/trip-budget.png" className="app-logo" alt="logo" height="110" width="110" />
      <NavBar />
    </header>
  )
};

export default Header;