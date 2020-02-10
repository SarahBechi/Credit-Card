import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";
import Inputs from "./Inputs.js";
import "./index.css";

class App extends Component {
  render() {
    return (
      <section>
        <Card />
        <Inputs />
      </section>
    );
  }
}

export default App;
