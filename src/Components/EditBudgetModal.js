import React, { Component } from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import Modal from 'react-modal'

class EditBudgetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: props.destination,
      totalExpectedBudget: props.totalBudget,
      amountSaved: props.amountSaved,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (event) => {
    const currentValue = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: currentValue });
  };

  handleSave = (event) => {
    event.preventDefault();
    fetch(`https://trip-budget-app.herokuapp.com/mytrips/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        destination: this.state.destination,
        totalExpectedBudget: this.state.totalBudget,
        amountSaved: this.state.amountSaved,
      }),
      headers: new Headers({ "content-type": "application/JSON" })
    })
    .then(response => response.json())
    .then(response => {this.props.listTrips()})
  }



  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Edit This Trip's Budget</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Your Budget For {this.state.destination}</ModalHeader>
          <ModalBody>
          <Form>
            Total Expected Budget
            <Input
              type="text"
              name="totalExpectedBudget"
              value={this.state.totalExpectedBudget}
              placeholder="Flights, lodging, car rental/ride share, gas, food, entertainment, etc..."
              onChange={this.handleChange}
            />
            Amount Saved
            <Input
              type="text"
              name="amountSaved"
              value={this.state.amountSaved}
              placeholder="Amount saved to date"
              onChange={this.handleChange}
            />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSave}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditBudgetModal;