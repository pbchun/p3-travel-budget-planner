import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Trip Budget Tracker</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/">Home</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2} href="/MyTrips">My Upcoming Trips</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="/FutureTrips">Future Trip Ideas</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}


// import { Navbar, Nav, NavItem} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// class NavBar extends Component {
//   render() {
//     return (
//       <Navbar className="navbar">
//         {/* <Navbar.Header>
//           <h1>
//             <Link to="/">Trip Budget Tracker</Link>
//           </h1>
//         </Navbar.Header> */}
//         <Navbar.Collapse>
//           <Nav pullRight>
//             <NavItem eventKey={1} href="/" to="/">
//               Home
//             </NavItem>
//             <NavItem eventKey={2} href="/MyTrips" to="/MyTrips">
//               My Upcoming Trips
//             </NavItem>
//             <NavItem eventKey={3} href="/FutureTrips" to="/FutureTrips">
//               Trip Destination Ideas
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }

// };

// export default NavBar;


