import React, { Component } from 'react';

export class PlatformDropdown extends Component {

    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }

    render() {
      return (
        <select 
            id="platform-dropdown"
            onChange={this.handleChange.bind(this)} >
            <option value="google" >Google Ads</option>
            <option value="bing" >Bing Ads</option>
        </select>
      )
    }
}

export default PlatformDropdown;
