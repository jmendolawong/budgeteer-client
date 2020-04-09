import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CategoryModal from '../../routes/CategoryPage/CategoryModal';
import './Nav.css'

//const isLoggedIn = true;



export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCatModal: false,
      showTransModal: false
    }
  }

  handleCatModal = () => {
    this.setState({
      showCatModal: true
    })
  }

  handleCloseCatModal = () => {
    this.setState({
      showCatModal: false
    })
  }

  render() {
    return (
      <div className='nav'>
        <Link to='/authentication'>
          Log In
        </Link>
        <Link to='/register'>
          Register
        </Link>
        <Link to='/:accountId'>
          Account
        </Link>
        <Link to='/:accountId/add-transaction'>
          +Expense
        </Link>
        <Link to='#' onClick={this.handleCatModal}>
          +Category
        </Link>
        <Link to='/:accountId/reports'>
          Reports
        </Link>
        <Link to='/'>
          Log out
        </Link>
        <CategoryModal
          isOpen={this.state.showCatModal}
          onRequestClose={this.handleCloseCatModal}
        />
      </div>
    );
  }
}

/*
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
*/