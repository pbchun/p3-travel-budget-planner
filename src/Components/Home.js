import React, { Component } from 'react';
// import Image from './Background/trip-planning.jpg';
import './Home.css';


// const backgroundImg = {
//   backgroundImage: "url('./Background/trip-planning.jpg')"
// }

class Home extends Component {
  render() {
    return(
      <section className="home">
        <h2>Welcome to Trip Budget Tracker</h2>
        <img className="home-img" src={"https://www.bostonmagazine.com/wp-content/uploads/sites/2/2015/08/shutterstock_honeymoon-planning.jpg"} />
        <p className="app-intro">Do you have a trip or vacation you're planning for? Use this app to keep track of how much you will need to budget for your next trip and keep track of how much money you have saved for it.</p>
      </section>
    )
  }
}

export default Home;
