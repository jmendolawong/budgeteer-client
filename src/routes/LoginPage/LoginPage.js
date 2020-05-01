import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ValidationError from '../../components/ValidationError/ValidationError';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import TransactionContext from '../../TransactionContext';
import './LoginPage.css';

const jwt = require('jsonwebtoken')

export default class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state ={ 
      error: null,
    }
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

        const account= jwt.decode(TokenService.getAuthToken())
        this.context.currentUser(account.user_id)
        this.props.history.push(`/${account.user_id}`)
      })
      .catch(res => {
        this.setState({error: 'Incorrect username or password'})
        user.value = ''
        password.value = ''
      })

  }

  static contextType = TransactionContext;

  render() {

    return (
      <div className='loginPage' >
        <p id='register'>New to Budgeteer? </p>
        <p><Link to='/register'>Sign up here</Link></p>
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
          {this.state.error && <ValidationError message={this.state.error} />}
          <button type='submit' className='btn'>Log In</button>
        </form>
      </div >
    );
  }
}