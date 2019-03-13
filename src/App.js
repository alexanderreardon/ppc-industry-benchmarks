import React, { Component } from 'react';
import MetricDropdown from './MetricDropdown.js';
import NetworkDropdown from './NetworkDropdown.js';
import BarChart from './BarChart.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      metric: 'click-thru-rate',
      network: 'search'
    }
  }

  metricFilterUpdate(metricValue) {
    this.setState({
      metric: metricValue,
    });
  }
  
  networkFilterUpdate(networkValue) {
    this.setState({
      network: networkValue,
    })
  }

  render() {

    return (

      <div className="myApp" >
        <div className="dropdowns">
          <MetricDropdown onChange={this.metricFilterUpdate.bind(this)} />
          <NetworkDropdown onChange={this.networkFilterUpdate.bind(this)} />
        </div>
        <br />
        <BarChart metric={this.state.metric} network={this.state.network} />
      </div>

    );
  }
}

export default App;
