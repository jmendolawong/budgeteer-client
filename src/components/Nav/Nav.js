import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import TransactionModal from '../TransactionModal/TransactionModal';
import TokenService from '../../services/token-service';
import TransactionContext from '../../TransactionContext';

import './Nav.css'

export default class Nav extends Component {
  static contextType = TransactionContext

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

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.context.updateUserStatus(TokenService.hasAuthToken())
  }

  renderIsLoggedIn() {
    return (
      <div className='nav'>
        <NavLink
          to={'/'}
          exact={true}
          className='home-nav'>
          Budgeteer
        </NavLink>
        <div className='nav-options'>
          <NavLink
            exact={true}
            to={`/${this.context.accountId}`}
            className='nav-link'
            activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Account
            </NavLink>

          <Link to='#' className='nav-link' onClick={this.handleTransModal}>+Transaction</Link>

          <NavLink
            to={`/${this.context.accountId}/reports`}
            className='nav-link' activeStyle={{
              textDecoration: "underline",
              color: '#6699CC'
            }}>
            Reports
            </NavLink>
          <Link
            exact='true'
            to='/'
            className='nav-link'
            onClick={this.handleLogout}>
            Log out
            </Link>
        </div>

        <TransactionModal
          isOpen={this.state.showTransModal}
          onRequestClose={this.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    )
  }

  renderIsLoggedOut() {
    return (
      <div className='logged-out-nav'>
        <NavLink
          to={'/'}
          exact={true}
          className='home-nav logged-out-home'>
          Budgeteer
        </NavLink>
        <div className='logged-out-nav-options'>
          <div className='logged-out-nav-right'>
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
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='nav'>
        {TokenService.hasAuthToken()
          ? this.renderIsLoggedIn()
          : this.renderIsLoggedOut()
        }
      </div>
    )
  }
}

/*
<NavLink
          exact={true}
          to='/'
          className='nav-link' activeStyle={{
            textDecoration: "underline",
            color: '#6699CC'
          }}>
          Log out
          </NavLink>
          */