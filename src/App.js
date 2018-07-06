import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import MyTrips from './Components/MyTrips';
import AddTripForm from './Components/AddTripForm';
import FutureTrips from './Components/FutureTrips';
import Footer from './Components/Footer';

import './App.css';


class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     myTripsData: [] 
  //   }
  // }

  // listTrips = () => {
  //   fetch('https://trip-budget-tracker.herokuapp.com/mytrips')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .then(data => {
  //       this.setState({
  //         myTripsData: data
  //       })
  //     })
  // }

  // componentDidMount() {
  //     this.listTrips()
  //   }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/MyTrips" component={MyTrips} />
          <Route path="/AddTripForm" component={AddTripForm} />
          <Route path="/FutureTrips" component={FutureTrips} />
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
