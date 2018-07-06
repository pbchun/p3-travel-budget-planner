import React from "react";

class AddTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Destination: "",
      StartTraveDate: "",
      EndTravelDate: "",
      TotalExpectedBudget: ""
    };
  }

  handleChange = event => {
    const currentValue = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: currentValue });
  };

  addTrip = event => {
    event.preventDefault();
    const formData = {
      Destination: this.state.Destination,
      StartTravelDate: this.state.StartTraveDate,
      EndTravelDate: this.state.EndTravelDate,
      TotalExpectedBudget: this.state.TotalExpectedBudget
    };
    this.props.newTrip(formData);
    this.setState({
      Destination: "",
      StartTravelDate: "",
      EndTravelDate: "",
      TotalExpectedBudget: ""
    });
  };

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a new trip</h3>
        <form className="trip-form" onSubmit={this.addTrip}>
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
            onChange={this.handleChange}
          />
          Amount Saved
          <input
            type="text"
            name="amountSaved"
            value={this.state.amountSaved}
            onChange={this.handleChange}
          />
          Amount To Save
          <input
            type="text"
            name="amountToSave"
            value={this.state.amountToSave}
            onChange={this.handleChange}
          />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}

export default AddTripForm;
