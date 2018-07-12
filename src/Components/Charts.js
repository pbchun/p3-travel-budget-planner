import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Charts.css';

class Charts extends Component {
  render() {
    return (
      <div>
        <Doughnut data={
          {labels: [
            'Amount Saved',
            'Amount Left To Save'
          ],
          datasets: [{
            data: [ this.props.amountSaved, this.props.amountToSave],
            backgroundColor: [
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#9abff9',
              '#f9f799'
            ]
          }]
          }
        } redraw />
      </div>
    );
  }
}

export default Charts;
