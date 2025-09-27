import React, { Component } from "react";
import Compo from "./Compo";

export default class App extends Component {
  state = { show: true };

  toggleComponent = () => {
    this.setState((prev) => ({ show: !prev.show }));
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>Toggle LoggerComponent</button>
        {this.state.show && <Compo />}
      </div>
    );
  }
}
