import React, { Component } from 'react';
import MetricDropdown from './MetricDropdown.js';
import NetworkDropdown from './NetworkDropdown.js';
import {Bar} from 'react-chartjs-2';

import './App.css';

const industries = {
  names: ['Advocacy','Auto','B2B','Consumer Services','Dating & Personals','E-Commerce','Education','Employment Services','Finance & Insurance','Health & Medical','Home Goods','Industrial Services','Legal','Real Estate','Technology','Travel & Hospitality'],
  backgroundColors: [
    'rgba(59, 117, 93,0.4)',
    'rgba(106, 108, 192, 0.4)',
    'rgba(206, 225, 66, 0.4)',
    'rgba(226, 112, 61, 0.4)',
    'rgba(192, 54, 35, 0.4)',
    'rgba(37, 120, 180, 0.4)',
    'rgba(153, 156, 167, 0.4)',
    'rgba(187, 71, 169, 0.4)',
    'rgba(44, 114, 125, 0.4)',
    'rgba(0, 0, 0, 0.4)',
    'rgba(80, 70, 87, 0.4)',
    'rgba(84, 168, 61, 0.4)',
    'rgba(227, 143, 76, 0.4)',
    'rgba(60, 84, 147, 0.4)',
    'rgba(144, 210, 189, 0.4)',
    'rgba(213, 132, 210, 0.4)'
    ]
  }

const searchCpc = {
  title: 'Avg. Cost-Per-Click on Google Search Network',
  data: [1.43, 2.46, 3.33, 6.40, 2.78, 1.16, 2.40, 2.04, 3.44, 2.62, 2.94, 2.56, 6.75, 2.37, 3.80, 1.53],
  label: 'Search Cost-Per-Click'

};
const displayCpc = {
  title: 'Avg. Cost-Per-Click on Google Display Network',
  data: [0.62, 0.58, 0.79, 0.81, 1.49, 0.45, 0.47, 0.78, 0.86, 0.63, 0.60, 0.54, 0.72, 0.75, 0.51, 0.44],
  label: 'Display Cost-Per-Click'

};
const searchCtr = {
  title: 'Avg. Click-Thru Rate on Google Search Network',
  label: 'Search Click-Thru Rate',
	data: [4.41, 4, 2.41, 2.41, 6.05, 2.69, 3.78, 2.42, 2.91, 3.27, 2.44, 2.61, 2.93, 3.71, 2.09, 4.68]
};
const displayCtr = {
  title: 'Avg. Click-Thru Rate on Google Display Network',
  label: 'Display Click-Thru Rate',
	data: [0.59, 0.60, 0.46, 0.51, 0.72, 0.51, 0.53, 0.59, 0.52, 0.59, 0.49, 0.50, 0.59, 1.08, 0.39, 0.47]
};
const searchConvRate = {
  title: 'Avg. Conversion Rate on Google Search Network',
  label: 'Search Conversion Rate',
	data: [1.96, 6.03, 3.04, 6.64, 9.64, 2.81, 3.39, 5.13, 5.10, 3.36, 2.70, 3.37, 6.98, 2.47, 2.92, 3.55]
};
const displayConvRate = {
  title: 'Avg. Conversion Rate on Google Display Network',
  label: 'Display Conversion Rate',
	data: [1.00, 1.19, 0.80, 0.98, 3.34, 0.59, 0.50, 1.57, 1.19, 0.82, 0.43, 0.94, 1.84, 0.80, 0.86, 0.51]
};
const searchCpa = {
  title: 'Avg. Cost-Per-Conversion on Google Search Network',
  data: [96.55, 33.52, 116.13, 90.70, 76.76, 45.27, 72.70, 48.04, 81.93, 78.09, 87.13, 79.28, 86.02, 116.61, 133.52, 44.73],
  label: 'Search Cost-Per-Conversion'
};
const displayCpa = {
  title: 'Avg. Cost-Per-Conversion on Google Display Network',
  data: [70.69, 23.68, 130.36, 60.48, 60.23, 65.80, 143.36, 59.47, 56.76, 72.58, 116.17, 51.58, 39.52, 74.79, 103.60, 99.13],
  label: 'Display Cost-Per-Conversion'

};

let dataTemplate = {
  labels: industries.names,
  datasets: [ {
    label: '',
    data: [],
    backgroundColor: industries.backgroundColors
  } ]
};

let optionsTemplate =  {
  title: {
    display: true,
    text: 'Google Advertising Industry Standards',
    fontSize: 25
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: function(value) {
            return value + "%"
          }
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          autoSkip: false
        }
      }
    ],
  },
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      metric: 'click-thru-rate',
      network: 'search',
      chartData: dataTemplate
    }
  }
  
  componentWillMount () {
    this.getChartData();
  }

  componentDidMount() {
    console.log(this.refs.chart.chartInstance)
  }

  getChartData() {
    let chartData = dataTemplate;
    if (this.state.metric === 'cost-per-click' && this.state.network === 'search') {
      chartData.datasets[0].label = searchCpc.label;
      chartData.datasets[0].data = searchCpc.data;
    } else if (this.state.metric === 'cost-per-click' && this.state.network === 'display') {
      chartData.datasets[0].label = displayCpc.label;
      chartData.datasets[0].data = displayCpc.data;
    } else if (this.state.metric === 'click-thru-rate' && this.state.network === 'search') {
      chartData.datasets[0].label = searchCtr.label;
      chartData.datasets[0].data = searchCtr.data;
    } else if (this.state.metric === 'click-thru-rate' && this.state.network === 'display') {
      chartData.datasets[0].label = displayCtr.label;
      chartData.datasets[0].data = displayCtr.data;
    } else if (this.state.metric === 'conversion-rate' && this.state.network === 'search') {
      chartData.datasets[0].label = searchConvRate.label;
      chartData.datasets[0].data = searchConvRate.data;
    } else if (this.state.metric === 'conversion-rate' && this.state.network === 'display') {
      chartData.datasets[0].label = displayConvRate.label;
      chartData.datasets[0].data = displayConvRate.data;
    } else if (this.state.metric === 'cost-per-conversion' && this.state.network === 'search') {
      chartData.datasets[0].label = searchCpa.label;
      chartData.datasets[0].data = searchCpa.data;      
    } else if (this.state.metric === 'cost-per-conversion' && this.state.network === 'display') {
      chartData.datasets[0].label = displayCpa.label;
      chartData.datasets[0].data = displayCpa.data;
    }
    this.setState({chartData: chartData});
    this.forceUpdate();
  }

  metricFilterUpdate(metricValue) {
    this.setState({
      metric: metricValue,
    });
    this.getChartData();
    this.forceUpdate();
  }
  
  networkFilterUpdate(networkValue) {
    this.setState({
      network: networkValue,
    })
    this.getChartData();
    this.forceUpdate();
  }

  render() {

    return (

      <div className="myApp" >
        <div className="dropdowns">
          <MetricDropdown onChange={this.metricFilterUpdate.bind(this)} />
          <NetworkDropdown onChange={this.networkFilterUpdate.bind(this)} />
        </div>
        <br />
        <Bar ref='chart' data={this.state.chartData} options={optionsTemplate} redraw />
      </div>

    );
  }
}

export default App;
