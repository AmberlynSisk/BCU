import React, { Component } from "react";
import Insights from "../Insights/insights";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Financial Insights for:</h2>

        <Insights />
      </div>
    );
  }
}
