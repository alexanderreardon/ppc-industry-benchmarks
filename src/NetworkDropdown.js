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
            <option value="search" >Search campaigns</option>
            <option value="display" >Display campaigns</option>
            <option value="shopping" >Shopping campaigns</option>
        </select>
      )
    }
}

export default NetworkDropdown;
