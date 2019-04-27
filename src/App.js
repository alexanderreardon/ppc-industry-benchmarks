import React, { Component } from 'react';
import Description from './Description';
import MetricDropdown from './MetricDropdown.js';
import NetworkDropdown from './NetworkDropdown.js';
import PlatformDropdown from './PlatformDropdown.js';
import BarChart from './BarChart.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      metric: 'click-thru-rate',
      network: 'search',
      platform: 'google'
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

  platformFilterUpdate(platformValue) {
    this.setState({
      platform: platformValue,
    })
  }

  render() {

    return (

      <div className="myApp" >
        <Description />
        <div className="dropdowns">
          <span id="dropdown-span-wrap">
          Show me the average
          <MetricDropdown onChange={this.metricFilterUpdate.bind(this)} />
          for 
          <NetworkDropdown onChange={this.networkFilterUpdate.bind(this)} />
          on 
          <PlatformDropdown onChange={this.platformFilterUpdate.bind(this)} />
          </span>
        </div>
        <br />
        <BarChart metric={this.state.metric} network={this.state.network} platform={this.state.platform} />
        <Footer />
      </div>

    );
  }
}

export default App;
