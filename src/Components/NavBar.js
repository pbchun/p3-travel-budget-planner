import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
  return(
    <div>
      <Nav bsStyle="pills" id="nav-bar">
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/MyTrips">
          My Upcoming Trips
        </NavItem>
        <NavItem eventKey={3} href="/FutureTrips">
          Destination Wish List
        </NavItem>
      </Nav>
  </div>
  )
};

export default NavBar;
