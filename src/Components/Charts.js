import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Charts.css';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: { 
        labels: [
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
        }],
      },
      // options: {
      //   elements: {
      //     center: {
      //       text: '90%',
      //       color: '#FF6384', // Default is #000000
      //       fontStyle: 'Arial', // Default is Arial
      //       sidePadding: 20 // Defualt is 20 (as a percentage)
      //     }
      //   }
      // }
    }
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.chartData} options={this.state.options} />
      </div>
    );
  }
}



export default Charts;