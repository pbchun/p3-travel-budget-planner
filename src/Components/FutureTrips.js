import React, { Component } from 'react';
import './FutureTrips.css';

class FutureTrips extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      futureTripsData: [], 
      newFutureTrip: ""
    }
  }

  listTrips = () => {
  fetch('https://trip-budget-app.herokuapp.com/futuretrips')
    .then(response => response.json())
    .then(data => {
      this.setState({
        futureTripsData: data.futuretrips
      })
    })
  }

  componentDidMount() {
      this.listTrips()
  }

  handleChange = (event) => {
    this.setState({ newFutureTrips: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.newFutureTrips)

    fetch('https://trip-budget-app.herokuapp.com/futuretrips', {
      method: 'POST',
      body: JSON.stringify({destination: this.state.newFutureTrips}),
      headers: new Headers({ "content-type": "application/JSON" })
    })
    .then(response => response.json())
    .then(response => {
      this.listTrips()
    })
  };

  handleDelete(trip, event) {
    event.preventDefault();
    
    fetch(`https://trip-budget-app.herokuapp.com/futuretrips/${trip.id}`, {
      method: 'DELETE'
    })
    .then(data => data.text)
    const futureTrips = this.state.futureTripsData.slice()
    const index = futureTrips.indexOf(trip)
    futureTrips.splice(index, 1)
    this.setState({
      futureTripsData: futureTrips
    })
  }

  render() {
    return (
      <section className="my-upcoming-trips">
        <h2>Trip Destination Wish List</h2>
        <ul>
          {this.state.futureTripsData.map(trip => {
            return (
              <li key={trip.id} className="trip-li">
                <h3>{trip.destination}</h3>
                <button onClick={this.handleDelete.bind(this, trip)}>Delete</button>
              </li>
            )
          })}
        </ul>
          
        <div className="future-trip-add-form">
          <h3>Add a new trip</h3>
          <form className="future-trip-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="destination"
                placeholder="Add a destination to your Wish List"
                value={this.state.destination}
                onChange={this.handleChange}
              />
              <button className="submit" type="submit" name="submit" value="Submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default FutureTrips;