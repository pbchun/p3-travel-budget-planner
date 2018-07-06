import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        {/* <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Trip Budget Planner</Link>
          </Navbar.Brand>
        </Navbar.Header> */}
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/MyTrips" to="/MyTrips">
              My Upcoming Trips
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/AddTripForm" to="/AddTripForm">
              Add A New Trip
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/FutureTrips" to="/FutureTrips">
              Trip Destination Ideas
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

};

export default NavBar;