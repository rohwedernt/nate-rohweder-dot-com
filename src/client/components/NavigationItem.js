import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "../App.css";

class NavigationItem extends Component {
  render() {
    return (
        <li>
          <NavLink 
            to={this.props.destination} 
            className={this.props.class}
            activeClassName="selected"
          >
            {this.props.text}
          </NavLink>
        </li>
    );
  }
}

NavigationItem.defaultProps = {
  class: 'custom-link'
};

export default NavigationItem;
