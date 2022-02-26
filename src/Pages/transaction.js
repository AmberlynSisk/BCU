import React, { Component } from 'react';

import TransactionTable from "../components/datatable"



export default class Transactions extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>
                        Running Balance: 
                        <br/>
                        $ X,XXX
                    </h1>
                </div>
              <TransactionTable />  
            </div>
        );
    }
}


      
// Test comment
     
      