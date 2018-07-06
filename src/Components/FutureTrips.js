import React, { Component } from 'react';

class FutureTrips extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      futureTripsData: [] 
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

  render() {
    return (
      <section className="my-upcoming-trips">
        <h2>Trip Destination Wish List</h2>
        <ul>
          {this.state.futureTripsData.map(trip => {
            return (
              <li key={trip.id}>
                <h3>{trip.destination}</h3>
              </li>
            )
          })}
        </ul>

        <aside id="side-bar">
          <h3>Add a new trip</h3>
          <form className="trip-form" onSubmit={this.addTrip}>
            Add a future trip destination
              <input
                type="text"
                name="destination"
                value={this.state.destination}
                onChange={this.handleChange}
              />
              <input type="submit" name="submit" value="Submit" />
          </form>
        </aside>
      </section>
    )
  }
}

export default FutureTrips;