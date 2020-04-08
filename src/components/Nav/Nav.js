import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const isLoggedIn = true;

export default class Nav extends Component {
  render() {
    return isLoggedIn
      ?
      (
        <div className='nav'>
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
        </div>

      )
      : (
        <div className='nav'>
          <Link to='/authentication'>
            Log In
          </Link>
          <Link to='/register'>
            Register
          </Link>
        </div>
      );
  }
}