import React, { Component } from 'react';
import AddTransaction from './addTransaction';

// import Datatable from "./datatable"
import Transaction from "../Pages/transaction"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Transaction />
        <AddTransaction />
      </div>
    );
  }
}
