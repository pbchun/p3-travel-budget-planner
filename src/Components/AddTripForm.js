import React from "react";
import './AddTripForm.css';

class AddTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      startTravelDate: "",
      endTravelDate: "",
      totalExpectedBudget: "",
      amountSaved: ""
    };
  }

  handleChange = (event) => {
    const currentValue = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: currentValue });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://trip-budget-app.herokuapp.com/mytrips', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ "content-type": "application/JSON" })
    })
    .then(response => response.json())
    .then(response => {
      this.props.listTrips()
    });
  }


  render() {
    return (
      <div className="add-form">
        <h3>Add a new trip</h3>
        <form className="trip-form" type="submit" onSubmit={this.handleSubmit}>
          Destination
            <input
              type="text"
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
            />
          Travel Start Date
            <input 
              type="date"
              name="startTravelDate"
              value={this.state.startTravelDate}
              onChange={this.handleChange}
            />
          Travel End Date
            <input
              type="date"
              name="endTravelDate"
              value={this.state.endTravelDate}
              onChange={this.handleChange}
            />
          Total Expected Budget
          
            <input
              type="text"
              name="totalExpectedBudget"
              value={this.state.totalExpectedBudget}
              placeholder="Transportation, food, lodging, entertainment, etc..."
              onChange={this.handleChange}
            />
          Amount Saved
            <input
              type="text"
              name="amountSaved"
              value={this.state.amountSaved}
              onChange={this.handleChange}
            />
          
          <button className="submit" type="submit" name="submit" value="Submit">Submit</button>
        </form>

      </div>

    );
  }
}

export default AddTripForm;
