import React, { Component } from 'react';

class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      myTripsData: [] 
    }
  }

  listTrips = () => {
  fetch('https://trip-budget-app.herokuapp.com/mytrips')
    .then(response => response.json())
    .then(data => {
      this.setState({
        myTripsData: data.mytrips
      })
    })
  }

  componentDidMount() {
      this.listTrips()
  }

  render() {
    return (
      <section className="my-upcoming-trips">
        <h2>My Upcoming Trips</h2>
        <ul>
          {this.state.myTripsData.map(trip => {
            return (
              <li key={trip.id}>
                <h3>{trip.destination}</h3>
                <h5>{trip.startTravelDate} - {trip.endTravelDate}</h5>
                <h5>Total Expected Budget: ${trip.totalExpectedBudget}</h5>
                <h6>Amount Saved: ${trip.amountSaved}</h6>
                <h6>Amount To Save: ${trip.totalExpectedBudget - trip.amountSaved}</h6>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default MyTrips;