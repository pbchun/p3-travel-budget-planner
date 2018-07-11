import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import MyTrips from './Components/MyTrips';
import FutureTrips from './Components/FutureTrips';
import Footer from './Components/Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/MyTrips" component={MyTrips} />
          <Route path="/FutureTrips" component={FutureTrips} />
          <Footer />
        </div>

      </Router>
    );
  }
}

export default App;
