import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <section className="home">
        <h2>Trip Budget Tracker</h2>
        <img className="home-img" src={"https://www.bostonmagazine.com/wp-content/uploads/sites/2/2015/08/shutterstock_honeymoon-planning.jpg"} />
        <p className="app-intro">Do you have a trip or vacation you're planning for? Use this app to keep track of how much you have saved and need to save for your trip. You can also keep a wish list of future trip destination ideas.</p>
      </section>
    );
  }
}

export default Home;
