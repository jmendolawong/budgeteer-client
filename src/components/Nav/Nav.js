import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import CategoryModal from '../CategoryModal/CategoryModal';
import TransactionModal from '../TransactionModal/TransactionModal';
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
      showCatModal: true,
      showTransModal: false
    })
  }

  handleTransModal = () => {
    this.setState({
      showCatModal: false,
      showTransModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showCatModal: false,
      showTransModal: false
    })
  }

  render() {
    return (
      <div className='nav'>
        <NavLink 
          to='/authentication' 
          className='nav-link' 
          activeStyle={{
            textDecoration: "underline"
        }}>
          Log In
        </NavLink>
        <NavLink 
          to='/register' 
          className='nav-link' 
          activeStyle={{
            textDecoration: "underline"
        }}>
          Register
        </NavLink>
        <NavLink 
          exact={true} 
          to='/:accountId' 
          className='nav-link' 
          activeStyle={{
            textDecoration: "underline"
        }}>
          Account
        </NavLink>

        <Link to='/:accountId/add-transaction' className='nav-link' onClick={this.handleTransModal}>+Expense</Link>
        <Link to='/:accountId/add-category' className='nav-link' onClick={this.handleCatModal}>+Category</Link>
        
        <NavLink 
          to='/:accountId/reports' 
          className='nav-link' activeStyle={{
            textDecoration: "underline"
        }}>
          Reports
        </NavLink>
        <NavLink 
          exact={true}
          to='/' 
          className='nav-link' activeStyle={{
            textDecoration: "underline"
        }}>
          Log out
        </NavLink>
        
        <CategoryModal
          isOpen={this.state.showCatModal}
          onRequestClose={this.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
        />
        <TransactionModal
          isOpen={this.state.showTransModal}
          onRequestClose={this.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
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