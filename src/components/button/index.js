import React, { Component } from "react";
import "./index.scss";

class Button extends Component {
  render() {
    return (
      <button>
        {this.props.novo} / {this.props.children}
      </button>
    );
  }
}

export default Button;
