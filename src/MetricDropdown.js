import React, { Component } from 'react';

export class MetricDropdown extends Component {
  
    handleChange = (e) => {
        this.setState({ metric: e.target.value});
        this.props.onChange(e.target.value);
    }

  
    render() {
        return (
        <select
            id="metric-dropdown"
            onChange={this.handleChange} >
            <option value="click-thru-rate">Click-Thru Rate</option>
            <option value="cost-per-click">Cost Per Click</option>
            <option value="conversion-rate">Conversion Rate</option>
            <option value="cost-per-conversion">Cost Per Conversion</option>
        </select>
        )
    }
}

export default MetricDropdown;
