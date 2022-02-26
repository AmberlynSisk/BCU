import React from "react";
import { A } from 'hookrouter';

export default function NavBar() {
  return (
    <div className="navigation-container">

      <div className='nav-link-wrapper'>
        <div className='nav-link'>
          <A className='link' href='/transactions'>
            Transactions
          </A>
        </div>
        <div className='nav-link'>
          <A className='link' href='/add-transaction'>
            Add Transaction
          </A>
        </div>
        <div className='nav-link'>
          <A className='link' href='/insights'>
            Insights
          </A>
        </div>
      </div>
    </div>
  )
}