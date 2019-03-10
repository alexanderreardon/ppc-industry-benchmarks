import React, { Component } from 'react';

export class MetricDropdown extends Component {
  
    metricFilterUpdate = (e) => {
        var metricInput = e.target.value;
        this.props.metricFilterUpdate(metricInput);
    }
  
    render() {
        return (
        <select
            id="metric-dropdown"
            onChange={this.metricFilterUpdate.bind(this)} >
            <option value="click-thru-rate">Click-Thru Rate</option>
            <option value="cost-per-click">Cost Per Click</option>
            <option value="conversion-rate">Conversion Rate</option>
            <option value="cost-per-conversion">Cost Per Conversion</option>
        </select>
        )
    }
}

export default MetricDropdown;
