import React, { Component } from 'react';
import AddTripForm from './AddTripForm';
import EditBudgetModal from './EditBudgetModal';
import Charts from './Charts';
import { Button } from 'reactstrap';
import './MyTrips.css';

class MyTrips extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myTripsData: [],
    };
  }

  listTrips = () => {
  fetch('https://trip-budget-app.herokuapp.com/mytrips')
    .then(response => response.json())
    .then(data => {
      this.setState({
        myTripsData: data.mytrips
      })
    });
  }

  componentDidMount() {
      this.listTrips();
  }

  handleDelete(trip, event) {
    event.preventDefault();
    fetch(`https://trip-budget-app.herokuapp.com/mytrips/${trip.id}`, {
      method: 'DELETE'
    })
    .then(data => data.text)
    const mytrips = this.state.myTripsData.slice();
    const index = mytrips.indexOf(trip);
    mytrips.splice(index, 1)
    this.setState({
      myTripsData: mytrips
    });
  }

  render() {
    return (
      <section className="my-upcoming-trips">
        <h1>My Upcoming Trips</h1>
        <ul>
          {this.state.myTripsData.map(trip => {
            return (
              <li key={trip.id}>
                <h2>{trip.destination}</h2>
                <h5>{trip.startTravelDate.toString().slice(0,10)} - {trip.endTravelDate.toString().slice(0,10)}</h5>
                <h4>Total Expected Budget: ${trip.totalExpectedBudget}</h4>
                <h4>Amount Saved: ${trip.amountSaved}</h4>
                <h5>Amount To Save: ${trip.totalExpectedBudget - trip.amountSaved}</h5>

                <Charts amountSaved={trip.amountSaved} amountToSave={trip.totalExpectedBudget - trip.amountSaved} />
                <div className="buttons">
                  <EditBudgetModal destination={trip.destination} totalBudget={trip.totalExpectedBudget} amountSaved={trip.amountSaved} id={trip.id} listTrips={this.listTrips} />
                  <Button className="delete-button" color="danger" onClick={this.handleDelete.bind(this, trip)}>Delete</Button>
                </div>
              </li>
            )
          })}
        </ul>
        <AddTripForm listTrips={this.listTrips}/>
      </section>
    );
  }
}

export default MyTrips;