import React from 'react';
import { Bar } from 'react-chartjs-2';

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
      'rgba(213, 132, 210, 0.4)'],
    borderColors: ['rgba(59, 117, 93,1)','rgba(106, 108, 192, 1)','rgba(206, 225, 66, 1)',
      'rgba(226, 112, 61, 1)',
      'rgba(192, 54, 35, 1)',
      'rgba(37, 120, 180, 1)',
      'rgba(153, 156, 167, 1)',
      'rgba(187, 71, 169, 1)',
      'rgba(44, 114, 125, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(80, 70, 87, 1)',
      'rgba(84, 168, 61, 1)',
      'rgba(227, 143, 76, 1)',
      'rgba(60, 84, 147, 1)',
      'rgba(144, 210, 189, 1)',
      'rgba(213, 132, 210, 1)']
  } 
const searchCpc = {
    labels: industries.names,
    datasets: [ {
      label: 'Search Cost-Per-Click',
      data: [1.43, 2.46, 3.33, 6.40, 2.78, 1.16, 2.40, 2.04, 3.44, 2.62, 2.94, 2.56, 6.75, 2.37, 3.80, 1.53],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const displayCpc = {
    labels: industries.names,
    datasets: [ {
      label: 'Display Cost-Per-Click',
      data: [0.62, 0.58, 0.79, 0.81, 1.49, 0.45, 0.47, 0.78, 0.86, 0.63, 0.60, 0.54, 0.72, 0.75, 0.51, 0.44],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const searchCtr = {
    labels: industries.names,
    datasets: [ {
      label: 'Search Click-Thru Rate',
      data: [4.41, 4, 2.41, 2.41, 6.05, 2.69, 3.78, 2.42, 2.91, 3.27, 2.44, 2.61, 2.93, 3.71, 2.09, 4.68],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const displayCtr = {
    labels: industries.names,
    datasets: [ {
      label: 'Display Click-Thru Rate',
      data: [0.59, 0.60, 0.46, 0.51, 0.72, 0.51, 0.53, 0.59, 0.52, 0.59, 0.49, 0.50, 0.59, 1.08, 0.39, 0.47],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const searchConvRate = {
    labels: industries.names,
    datasets: [ {
      label: 'Search Conversion Rate',
      data: [1.96, 6.03, 3.04, 6.64, 9.64, 2.81, 3.39, 5.13, 5.10, 3.36, 2.70, 3.37, 6.98, 2.47, 2.92, 3.55],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const displayConvRate = {
    labels: industries.names,
    datasets: [ {
      label: 'Display Conversion Rate',
      data: [1.00, 1.19, 0.80, 0.98, 3.34, 0.59, 0.50, 1.57, 1.19, 0.82, 0.43, 0.94, 1.84, 0.80, 0.86, 0.51],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const searchCpa = {
    labels: industries.names,
    datasets: [ {
      label: 'Search Cost-Per-Conversion',
      data: [96.55, 33.52, 116.13, 90.70, 76.76, 45.27, 72.70, 48.04, 81.93, 78.09, 87.13, 79.28, 86.02, 116.61, 133.52, 44.73],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
const displayCpa = {
    labels: industries.names,
    datasets: [ {
      label: 'Display Cost-Per-Conversion',
      data: [70.69, 23.68, 130.36, 60.48, 60.23, 65.80, 143.36, 59.47, 56.76, 72.58, 116.17, 51.58, 39.52, 74.79, 103.60, 99.13],
      backgroundColor: industries.backgroundColors,
      borderWidth: 3,
      borderColor: industries.borderColors
    } ]
  };
  

const dollarMetrics = ['cost-per-click', 'cost-per-conversion'];
const percentMetrics = ['click-thru-rate', 'conversion-rate'];

let options =  {
    title: {
      display: true,
      text: 'Google Advertising Industry Standards',
      fontSize: 25,
      fontColor: '#136598',
      fontFamily: "'Lato', 'Open Sans', sans-serif",
      padding: 15
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {

            }
          },
          beginAtZero: true
        }
      ],
      xAxes: [
        {
          ticks: {
            // Prevents only showing a couple industry names
            autoSkip: false
          }
        }
      ],
    },
  };


export default ( { metric, network } ) => {
    
    var chartData = function() {
        options.scales.yAxes[0].ticks.callback = (value) => {
            value.toFixed(2);
            if (dollarMetrics.includes(metric)) {
                return '$' + value.toFixed(2);
            } else if (percentMetrics.includes(metric)) {
                return value.toFixed(2) + '%';
            }
        };

        options.scales.yAxes[0].ticks.beginAtZero = true;
        
        if (metric === 'cost-per-click' && network === 'search') {
            // Change the title dynamically
            // options.title.text = 'Avg. CPC on Google Search Network';
            return searchCpc
        } else if (metric === 'cost-per-click' && network === 'display') {
          return displayCpc
        } else if (metric === 'click-thru-rate' && network === 'search') {
          return searchCtr
        } else if (metric === 'click-thru-rate' && network === 'display') {
          return displayCtr
        } else if (metric === 'conversion-rate' && network === 'search') {
          return searchConvRate
        } else if (metric === 'conversion-rate' && network === 'display') {
          return displayConvRate
        } else if (metric === 'cost-per-conversion' && network === 'search') {
          return searchCpa
        } else if (metric === 'cost-per-conversion' && network === 'display') {
          return displayCpa
        }
    }

    return (
    <div>
        <Bar data={chartData} options={options} redraw />
    </div>
    )
};

