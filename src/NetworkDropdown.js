import React, { Component } from 'react';

export class NetworkDropdown extends Component {

    networkFilterUpdate = (e) => {
      var networkInput = e.target.value;
      this.props.networkFilterUpdate(networkInput);
    }

    render() {
      return (
        <select 
            id="network-dropdown"
            onChange={this.networkFilterUpdate.bind(this)} >
            <option value="search" >Google Search Ads</option>
            <option value="display" >Google Display Ads</option>
        </select>
      )
    }
}

export default NetworkDropdown;
