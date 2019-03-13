import React, { Component } from 'react';

export class NetworkDropdown extends Component {

    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }

    render() {
      return (
        <select 
            id="network-dropdown"
            onChange={this.handleChange.bind(this)} >
            <option value="search" >Google Search Ads</option>
            <option value="display" >Google Display Ads</option>
        </select>
      )
    }
}

export default NetworkDropdown;
