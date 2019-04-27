import React from 'react';
import { Bar } from 'react-chartjs-2';


const industries = {
  searchDisplayGoogle: {
      industryNames: ['Advocacy','Auto','B2B','Consumer Services','Dating & Personals','E-Commerce','Education','Employment Services','Finance & Insurance','Health & Medical','Home Goods','Industrial Services','Legal','Real Estate','Technology','Travel & Hospitality'],
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
      borderColors: ['rgba(59, 117, 93,1)',
          'rgba(106, 108, 192, 1)',
          'rgba(206, 225, 66, 1)',
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
  },
  shoppingGoogleBing: {
      industryNames: [
          'Medical Supplies',
          'Health & Beauty',
          'Child & Infant Care',
          'Pet Care',
          'Clothing & Apparel',
          'Food & Alcohol',
          'Home & Garden',
          'HVAC & Climate Control',
          'Automotive Supplies',
          'Travel & Luggage',
          'Entertainment & Events',
          'Educational Supplies',
          'Computers & Technology',
          'Office & Business Needs',
          'Art & Music',
          'Chemical & Industrial'],
      backgroundColors: [
          'rgba(14, 116, 187, 0.4)',
          'rgba(93, 170, 212, 0.4)',
          'rgba(251, 137, 67, 0.4)',
          'rgba(252, 189, 148, 0.4)',
          'rgba(251, 192, 26, 0.4)',
          'rgba(253, 214, 93, 0.4)',
          'rgba(131, 211, 148, 0.4)',
          'rgba(65, 178, 88, 0.4)',
          'rgba(139, 211, 233, 0.4)',
          'rgba(31, 175, 209, 0.4)',
          'rgba(104, 107, 174, 0.4)',
          'rgba(181, 185, 220, 0.4)',
          'rgba(147, 73, 160, 0.4)',
          'rgba(203, 131, 179, 0.4)',
          'rgba(157, 22, 125, 0.4)',
          'rgba(127, 128, 133, 0.4)'],
      borderColors: [
          'rgba(14, 116, 187, 1)',
          'rgba(93, 170, 212, 1)',
          'rgba(251, 137, 67, 1)',
          'rgba(252, 189, 148, 1)',
          'rgba(251, 192, 26, 1)',
          'rgba(253, 214, 93, 1)',
          'rgba(131, 211, 148, 1)',
          'rgba(65, 178, 88, 1)',
          'rgba(139, 211, 233, 1)',
          'rgba(31, 175, 209, 1)',
          'rgba(104, 107, 174, 1)',
          'rgba(181, 185, 220, 1)',
          'rgba(147, 73, 160, 1)',
          'rgba(203, 131, 179, 1)',
          'rgba(157, 22, 125, 1)',
          'rgba(127, 128, 133, 1)']
  },
  bingSearchDisplay: {
    industryNames: ["Apparel & Accessories", "Automotive", "B2B Services", "B2C Services", "Careers & Employment", "Consumer Electronics", "Education", "Finance & Insurance", "Health & Wellness", "Home & Garden", "Home Improvement", "Home Services", "Legal Services", "Real Estate", "Restaurants & Food", "Retail", "Technology", "Travel & Hospitality"],
    backgroundColors: [
      "rgb(59, 117, 94, 0.4)",
      "rgb(106, 108, 192, 0.4)",
      "rgb(202, 222, 45, 0.4)",
      "rgb(226, 112, 60, 0.4)",
      "rgb(192, 55, 36, 0.4)",
      "rgb(37, 120, 180, 0.4)",
      "rgb(153, 156, 167, 0.4)",
      "rgb(188, 71, 169, 0.4)",
      "rgb(44, 114, 125, 0.4)",
      "rgb(38, 38, 38, 0.4)",
      "rgb(80, 70, 87, 0.4)",
      "rgb(84, 168, 61, 0.4)",
      "rgb(227, 143, 77, 0.4)",
      "rgb(60, 83, 148, 0.4)",
      "rgb(107, 139, 177, 0.4)",
      "rgb(144, 210, 189, 0.4)",
      "rgb(213, 132, 210, 0.4)",
      "rgb(255, 154, 143, 0.4)"],
    borderColors: [
      "rgb(59, 117, 94, 1)",
      "rgb(106, 108, 192, 1)",
      "rgb(202, 222, 45, 1)",
      "rgb(226, 112, 60, 1)",
      "rgb(192, 55, 36, 1)",
      "rgb(37, 120, 180, 1)",
      "rgb(153, 156, 167, 1)",
      "rgb(188, 71, 169, 1)",
      "rgb(44, 114, 125, 1)",
      "rgb(38, 38, 38, 1)",
      "rgb(80, 70, 87, 1)",
      "rgb(84, 168, 61, 1)",
      "rgb(227, 143, 77, 1)",
      "rgb(60, 83, 148, 1)",
      "rgb(107, 139, 177, 1)",
      "rgb(144, 210, 189, 1)",
      "rgb(213, 132, 210, 1)",
      "rgb(255, 154, 143, 1)"]
  }
} 

/* Google Metrics */
const cpcGoogleSearch = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Search Ads Cost-Per-Click',
    data: [1.43, 2.46, 3.33, 6.40, 2.78, 1.16, 2.40, 2.04, 3.44, 2.62, 2.94, 2.56, 6.75, 2.37, 3.80, 1.53],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cpcGoogleDisplay = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Display Ads Cost-Per-Click',
    data: [0.62, 0.58, 0.79, 0.81, 1.49, 0.45, 0.47, 0.78, 0.86, 0.63, 0.60, 0.54, 0.72, 0.75, 0.51, 0.44],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cpcGoogleShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Google Shopping Ads Cost-Per-Click',
    data: [0.63, 0.87, 0.36, 0.82, 0.69, 0.42, 0.58, 0.47, 0.56, 0.40, 0.48, 0.83, 0.89, 1.09, 0.34, 0.66],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const ctrGoogleSearch = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Search Ads Click-Thru Rate',
    data: [4.41, 4, 2.41, 2.41, 6.05, 2.69, 3.78, 2.42, 2.91, 3.27, 2.44, 2.61, 2.93, 3.71, 2.09, 4.68],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const ctrGoogleDisplay = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Display Ads Click-Thru Rate',
    data: [0.59, 0.60, 0.46, 0.51, 0.72, 0.51, 0.53, 0.59, 0.52, 0.59, 0.49, 0.50, 0.59, 1.08, 0.39, 0.47],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const ctrGoogleShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Google Shopping Ads Click-Thru Rate',
    data: [0.87, 0.74, 0.71, 0.68, 0.76, 0.91, 0.90, 1.12, 1.20, 0.99, 0.92, 0.94, 0.55, 0.65, 0.76, 0.89],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const cvrGoogleSearch = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Search Ads Conversion Rate',
    data: [1.96, 6.03, 3.04, 6.64, 9.64, 2.81, 3.39, 5.13, 5.10, 3.36, 2.70, 3.37, 6.98, 2.47, 2.92, 3.55],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cvrGoogleDisplay = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Display Ads Conversion Rate',
    data: [1.00, 1.19, 0.80, 0.98, 3.34, 0.59, 0.50, 1.57, 1.19, 0.82, 0.43, 0.94, 1.84, 0.80, 0.86, 0.51],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cvrGoogleShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Google Shopping Ads Conversion Rate',
    data: [2.94, 2.78, 2.20, 1.07, 2.70, 2.16, 1.31, 3.30, 1.29, 2.07, 1.98, 1.88, 2.20, 2.45, 1.77, 0.83],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const cpaGoogleSearch = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Search Ads Cost-Per-Conversion',
    data: [96.55, 33.52, 116.13, 90.70, 76.76, 45.27, 72.70, 48.04, 81.93, 78.09, 87.13, 79.28, 86.02, 116.61, 133.52, 44.73],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cpaGoogleDisplay = {
  labels: industries.searchDisplayGoogle.industryNames,
  datasets: [ {
    label: 'Google Display Ads Cost-Per-Conversion',
    data: [70.69, 23.68, 130.36, 60.48, 60.23, 65.80, 143.36, 59.47, 56.76, 72.58, 116.17, 51.58, 39.52, 74.79, 103.60, 99.13],
    backgroundColor: industries.searchDisplayGoogle.backgroundColors,
    borderWidth: 3,
    borderColor: industries.searchDisplayGoogle.borderColors
  } ]
};
const cpaGoogleShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Google Shopping Ads Cost-Per-Conversion',
    data: [19.23, 35.89, 49.36, 26.01, 19.29, 35.80, 58.00, 7.28, 54.76, 36.34, 17.51, 30.67, 75.92, 68.55, 19.03, 91.21],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};

/* Bing Metrics */
const ctrBing = {
  labels: industries.bingSearchDisplay.industryNames,
  datasets: [{
    label: 'Bing Ads Click-Thru Rate',
    data: [3.33, 2.34, 3.01, 2.12, 3.53, 2.88, 2.37, 3.51, 2.90, 2.70, 2.92, 2.55, 2.84, 2.20, 2.60, 3.06, 2.40, 2.83],
    backgroundColor: industries.bingSearchDisplay.backgroundColors,
    borderWidth: 3,
    borderColor: industries.bingSearchDisplay.borderColors
  }]
}
const cpcBing = {
  labels: industries.bingSearchDisplay.industryNames,
  datasets: [{
    label: 'Bing Ads Cost-Per-Click',
    data: [0.91, 2.52, 1.16,1.78, 0.75, 1.22, 2.79, 1.82, 1.70, 1.01, 2.54, 1.50, 1.42, 2.88, 1.69, 1.24, 1.95, 1.17],
    backgroundColor: industries.bingSearchDisplay.backgroundColors,
    borderWidth: 3,
    borderColor: industries.bingSearchDisplay.borderColors
  }]
}
const cvrBing = {
  labels: industries.bingSearchDisplay.industryNames,
  datasets: [{
    label: 'Bing Ads Conversion Rate',
    data: [2.88, 1.62, 2.64, 4.80, 6.81, 3.01, 3.55, 5.57, 2.55, 2.54, 2.78, 3.36,3.58, 5.13, 4.42, 2.65, 2.04, 1.58],
    backgroundColor: industries.bingSearchDisplay.backgroundColors,
    borderWidth: 3,
    borderColor: industries.bingSearchDisplay.borderColors
  }]
}
const cpaBing = {
  labels: industries.bingSearchDisplay.industryNames,
  datasets: [{
    label: 'Bing Ads Cost-Per-Conversion',
    data: [25.16, 34.40, 54.13, 47.18, 23.71, 39.85, 45.90, 37.30, 42.47, 33.57, 84.85, 21.68, 56.99, 29.40, 26.14, 30.25, 102.94, 73.15],
    backgroundColor: industries.bingSearchDisplay.backgroundColors,
    borderWidth: 3,
    borderColor: industries.bingSearchDisplay.borderColors
  }]
}
const ctrBingShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Bing Shopping Ads Click-Thru Rate',
    data: [1.35, 1.48, 2.02, 1.63, 1.05, 1.04, 1.40, 1.39, 1.29, 1.45, 1.40, 0.84, 1.21, 0.94, 0.87, 1.45],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const cpcBingShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Bing Shopping Ads Cost-Per-Click',
    data: [0.31, 1.26, 0.11, 0.25, 0.83, 0.43, 0.52, 0.60, 0.23, 0.31, 0.30, 0.80, 0.43, 5.81, 3.39, 0.75],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const cvrBingShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Bing Shopping Ads Conversion Rate',
    data: [2.18, 7.17, 2.11, 1.57, 0.67, 0.76, 1.91, 3.50, 1.35, 1.99, 2.16, 1.48, 4.48, 15.19, 1.00, 1.26],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};
const cpaBingShopping = {
  labels: industries.shoppingGoogleBing.industryNames,
  datasets: [ {
    label: 'Bing Shopping Ads Cost-Per-Conversion',
    data: [18.66, 27.72, 9.87, 12.95, 21.40, 48.69, 34.87, 17.26, 33.98, 29.15, 16.26, 46.70, 42.82, 45.96, 34.50, 31.62],
    backgroundColor: industries.shoppingGoogleBing.backgroundColors,
    borderWidth: 3,
    borderColor: industries.shoppingGoogleBing.borderColors
  } ]
};

const dollarMetrics = ['cost-per-click', 'cost-per-conversion'];
const percentMetrics = ['click-thru-rate', 'conversion-rate'];

let options =  {
    title: {
      display: false,
      text: 'Google Advertising Industry Standards',
      fontSize: 25,
      fontColor: '#136598',
      fontFamily: "'Lato', 'Open Sans', sans-serif",
      padding: 15
    },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
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
          },
          gridLines: {
            display: false
          }
        }
      ],
    },
  };


export default ( { metric, network, platform } ) => {
    
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
        
        if (metric === 'cost-per-click' && network === 'search' && platform === 'google') {
          // Change the title dynamically
          // options.title.text = 'Avg. CPC on Google Search Network';
          return cpcGoogleSearch
      } else if (metric === 'cost-per-click' && network === 'display' && platform === 'google') {
        return cpcGoogleDisplay
      } else if (metric === 'cost-per-click' && network === 'shopping' && platform === 'google') {
        return cpcGoogleShopping
      } else if (metric === 'click-thru-rate' && network === 'search' && platform === 'google') {
        return ctrGoogleSearch
      } else if (metric === 'click-thru-rate' && network === 'display' && platform === 'google') {
        return ctrGoogleDisplay
      } else if (metric === 'click-thru-rate' && network === 'shopping' && platform === 'google') {
        return ctrGoogleShopping
      } else if (metric === 'conversion-rate' && network === 'search' && platform === 'google') {
        return cvrGoogleSearch
      } else if (metric === 'conversion-rate' && network === 'display' && platform === 'google') {
        return cvrGoogleDisplay
      } else if (metric === 'conversion-rate' && network === 'shopping' && platform === 'google') {
        return cvrGoogleShopping
      } else if (metric === 'cost-per-conversion' && network === 'search' && platform === 'google') {
        return cpaGoogleSearch
      } else if (metric === 'cost-per-conversion' && network === 'display' && platform === 'google') {
        return cpaGoogleDisplay
      } else if (metric === 'cost-per-conversion' && network === 'shopping' && platform === 'google') {
        return cpaGoogleShopping
      } else if (metric === 'click-thru-rate' && network === 'search' && platform === 'bing') {
        return ctrBing
      } else if (metric === 'click-thru-rate' && network === 'display' && platform === 'bing') {
        return ctrBing
      } else if (metric === 'cost-per-click' && network === 'search' && platform === 'bing') {
        return cpcBing
      } else if (metric === 'cost-per-click' && network === 'display' && platform === 'bing') {
        return cpcBing
      } else if (metric === 'conversion-rate' && network === 'search' && platform === 'bing') {
        return cvrBing
      } else if (metric === 'conversion-rate' && network === 'display' && platform === 'bing') {
        return cvrBing
      } else if (metric === 'cost-per-conversion' && network === 'search' && platform === 'bing') {
        return cpaBing
      } else if (metric === 'cost-per-conversion' && network === 'display' && platform === 'bing') {
        return cpaBing
      } else if (metric === 'click-thru-rate' && network === 'shopping' && platform === 'bing') {
        return ctrBingShopping
      } else if (metric === 'cost-per-click' && network === 'shopping' && platform === 'bing') {
        return cpcBingShopping
      } else if (metric === 'conversion-rate' && network === 'shopping' && platform === 'bing') {
        return cvrBingShopping
      } else if (metric === 'cost-per-conversion' && network === 'shopping' && platform === 'bing') {
        return cpaBingShopping
      }
      
    }

    return (
      <div className="chart-container">
        <div className="chart-container-inner">
          <Bar data={chartData} options={options} redraw />
        </div>
      </div>
    )
};

