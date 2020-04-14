import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import CategoryModal from '../CategoryModal/CategoryModal';
import TransactionModal from '../TransactionModal/TransactionModal';
import './Nav.css'

const isLoggedIn = true;



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
          <Link to='#' className='nav-link' onClick={this.handleCatModal}>+Category</Link>

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
