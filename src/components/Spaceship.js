// Code The Spaceship Component Here
import React, { Component } from "react";

// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

class Spaceship extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.speed}</li>
        <li>{this.props.hasRockets}</li>
        <li>{this.props.colors}</li>
      </ul>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
