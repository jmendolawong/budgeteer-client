import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import TransactionModal from '../TransactionModal/TransactionModal';
import './Nav.css'

const isLoggedIn = true;



export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showTransModal: false
    }
  }

  handleTransModal = () => {
    this.setState({
      showTransModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showTransModal: false
    })
  }

  render() {
    return isLoggedIn
      ?
      (
        <div className='nav'>
          <NavLink
            exact={true}
            to='/:accountId'
            className='nav-link'
            activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Account
          </NavLink>

          <Link to='#' className='nav-link' onClick={this.handleTransModal}>+Expense</Link>

          <NavLink
            to='/:accountId/reports'
            className='nav-link' activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Reports
          </NavLink>
          <NavLink
            exact={true}
            to='/'
            className='nav-link' activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Log out
          </NavLink>

          <TransactionModal
            isOpen={this.state.showTransModal}
            onRequestClose={this.handleCloseModal}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      )
      :
      (
        <div className='nav'>
          <NavLink
            to='/authentication'
            className='nav-link'
            activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Log In
          </NavLink>
          <NavLink
            to='/register'
            className='nav-link'
            activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Register
          </NavLink>
        </div>
      );
  }
}
