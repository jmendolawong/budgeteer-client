import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';
import TransactionContext from '../../TransactionContext'
import './LoginPage.css';

export default class LoginPage extends Component {

  handleSubmitAuth = e => {
    e.preventDefault()
    const { user, password } = e.target

    console.log('login form submitted')
    console.log({ user, password })
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user.value, password.value)
    )
    this.context.updateUserStatus(TokenService.hasAuthToken())

    user.value = ''
    password.value = ''
  }

  static contextType = TransactionContext;

  render() {
    
    return (
      <div className='loginPage' >
        <p id='register'>New to Budgeteer? <Link to='/register'>Sign up here</Link></p>
        <form 
          className="login-form"
          onSubmit={this.handleSubmitAuth}>
          <div className="login-input">
            <label htmlFor='user'>Username: </label>
            <input type='text' id='user' name='user' />
          </div>
          <div className="login-input">
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' />
          </div>
          <button type='submit'>Log In</button>
        </form>
      </div >
    );
  }
}