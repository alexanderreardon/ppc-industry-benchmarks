
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
    }

} 

const cpcGoogleSearch = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Search Cost-Per-Click',
      data: [1.43, 2.46, 3.33, 6.40, 2.78, 1.16, 2.40, 2.04, 3.44, 2.62, 2.94, 2.56, 6.75, 2.37, 3.80, 1.53],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const cpcGoogleDisplay = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Display Cost-Per-Click',
      data: [0.62, 0.58, 0.79, 0.81, 1.49, 0.45, 0.47, 0.78, 0.86, 0.63, 0.60, 0.54, 0.72, 0.75, 0.51, 0.44],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const cpcGoogleShopping = {
    labels: industries.shoppingGoogleBing.industryNames,
    datasets: [ {
      label: 'Shopping Cost-Per-Click',
      data: [ 0.63, 0.87, 0.36, 0.82, 0.69, 0.42, 0.58, 0.47, 0.56, 0.40, 0.48, 0.83, 0.89, 1.09, 0.34, 0.66],
      backgroundColor: industries.shoppingGoogleBing.backgroundColors,
      borderWidth: 3,
      borderColor: industries.shoppingGoogleBing.borderColors
    } ]
  };
const ctrGoogleSearch = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Search Click-Thru Rate',
      data: [4.41, 4, 2.41, 2.41, 6.05, 2.69, 3.78, 2.42, 2.91, 3.27, 2.44, 2.61, 2.93, 3.71, 2.09, 4.68],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const ctrGoogleDisplay = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Display Click-Thru Rate',
      data: [0.59, 0.60, 0.46, 0.51, 0.72, 0.51, 0.53, 0.59, 0.52, 0.59, 0.49, 0.50, 0.59, 1.08, 0.39, 0.47],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const ctrGoogleShopping = {
    labels: industries.shoppingGoogleBing.industryNames,
    datasets: [ {
      label: 'Shopping Click-Thru Rate',
      data: [ 0.87, 0.74, 0.71, 0.68, 0.76, 0.91, 0.90, 1.12, 1.20, 0.99, 0.92, 0.94, 0.55, 0.65, 0.76, 0.89],
      backgroundColor: industries.shoppingGoogleBing.backgroundColors,
      borderWidth: 3,
      borderColor: industries.shoppingGoogleBing.borderColors
    } ]
  };
const cvrGoogleSearch = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Search Conversion Rate',
      data: [1.96, 6.03, 3.04, 6.64, 9.64, 2.81, 3.39, 5.13, 5.10, 3.36, 2.70, 3.37, 6.98, 2.47, 2.92, 3.55],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const cvrGoogleDisplay = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Display Conversion Rate',
      data: [1.00, 1.19, 0.80, 0.98, 3.34, 0.59, 0.50, 1.57, 1.19, 0.82, 0.43, 0.94, 1.84, 0.80, 0.86, 0.51],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const cvrGoogleShopping = {
    labels: industries.shoppingGoogleBing.industryNames,
    datasets: [ {
      label: 'Shopping Conversion Rate',
      data: [2.94, 2.78, 2.20, 1.07, 2.70, 2.16, 1.31, 3.30, 1.29, 2.07, 1.98, 1.88, 2.20, 2.45, 1.77, 0.83],
      backgroundColor: industries.shoppingGoogleBing.backgroundColors,
      borderWidth: 3,
      borderColor: industries.shoppingGoogleBing.borderColors
    } ]
  };
const cpaGoogleSearch = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Search Cost-Per-Conversion',
      data: [96.55, 33.52, 116.13, 90.70, 76.76, 45.27, 72.70, 48.04, 81.93, 78.09, 87.13, 79.28, 86.02, 116.61, 133.52, 44.73],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
const cpaGoogleDisplay = {
    labels: industries.searchDisplayGoogle.industryNames,
    datasets: [ {
      label: 'Display Cost-Per-Conversion',
      data: [70.69, 23.68, 130.36, 60.48, 60.23, 65.80, 143.36, 59.47, 56.76, 72.58, 116.17, 51.58, 39.52, 74.79, 103.60, 99.13],
      backgroundColor: industries.searchDisplayGoogle.backgroundColors,
      borderWidth: 3,
      borderColor: industries.searchDisplayGoogle.borderColors
    } ]
  };
  





if (metric === 'cost-per-click' && network === 'search' && platform == 'google') {
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
} else if (metric === 'conversion-rate' && network === 'search' && platform === 'google') {
  return cvrGoogleSearch
} else if (metric === 'conversion-rate' && network === 'display' && platform === 'google') {
  return cvrGoogleDisplay
} else if (metric === 'cost-per-conversion' && network === 'search' && platform === 'google') {
  return cpaGoogleSearch
} else if (metric === 'cost-per-conversion' && network === 'display' && platform === 'google') {
  return cpaGoogleDisplay
}