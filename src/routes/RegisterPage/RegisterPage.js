import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';
import AuthApiService from '../../services/auth-api-service';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: '',
        touched: false
      },
      password: {
        value: '',
        touched: false
      },
      error: null,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then(() => {
        username.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <div className='registerPage'>
        <p id='register'>Already have an account? <Link to='/authentication'>Log in.</Link></p>
        <form className="register-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="register-input">
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' name='username' placeholder='Porthos' />
          </div>
          <div className="register-input">
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' />
          </div>
          <button type='submit' id='register-submit'>Sign Up</button>
        </form>
      </div >
    );
  }
}