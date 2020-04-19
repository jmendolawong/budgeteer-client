import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import TransactionContext from '../../TransactionContext';
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

  handleSubmitJwtAuth = e => {
       e.preventDefault()
       const { user, password } = e.target
    
       AuthApiService.postLogin({
         username: user.value,
         password: password.value,
       })
         .then(res => {
           user.value = ''
           password.value = ''
           TokenService.saveAuthToken(res.authToken)
           this.context.updateUserStatus(TokenService.hasAuthToken())
          })
         .catch(res => {
           this.setState({ error: res.error })
         })
     }

  static contextType = TransactionContext;

  render() {
    
    return (
      <div className='loginPage' >
        <p id='register'>New to Budgeteer? <Link to='/register'>Sign up here</Link></p>
        <form 
          className="login-form"
          onSubmit={this.handleSubmitJwtAuth}>
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