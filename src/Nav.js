import React from 'react';
//import 'Nav.css'

export default function Nav() {
  return (
    
    <div className='nav'>
      (isLoggedIn)
      ?
      <Link to='/:accountId'>
        Account
      </Link>
      <Link to='/:accountId/add-transaction'>
        +Expense
      </Link>
      <Link to='/:accountId/add-category'>
        +Category
      </Link>
      <Link to='/:accountId/reports'>
        Reports
      </Link>
      <Link to='/'>
        Log out
      </Link>
      :
      <Link to='/authentication'>
        Log In
      </Link>
    </div>
    
  );
}