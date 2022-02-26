import React, { Component } from "react";

import Insights from "../Insights/insights";
import AddTransaction from './addTransaction';
import Transaction from "../Pages/transaction"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Transaction />
        <AddTransaction />
        <Insights />

      </div>
    );
  }
}
