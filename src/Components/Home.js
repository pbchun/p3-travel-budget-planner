import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return(
      <section className="home">
        <h2>Welcome to Trip Budget Tracker</h2>
        <p className="app-intro">Do you have a trip or vacation you're planning for? Use this app to keep track of how much you will need to budget for your next trip and keep track of how much money you have saved for it.</p>
        {/* <Link to="/MyTrips">
          <Button bsStyle="primary">My Upcoming Trips</Button>
        </Link>
        <Link to="/AddTripForm">
          <Button bsStyle="primary">Add A New Trip</Button>
        </Link> */}
      </section>
    )
  }
}

export default Home;
