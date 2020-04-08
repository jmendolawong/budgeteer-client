import React from 'react';
import { Link } from 'react-router-dom';
//import './LoginPage.css';

export default function LoginPage() {

  return (
    <div className='LoginPage'>
      <p id='register'>New to Budgeteer? <Link to='/register'>Sign up here</Link></p>
      <form className="login-form">
        <div className="login-user">
          <label htmlFor='user'>Username: </label>
          <input type='text' id='user' name='user' />
        </div>
        <div className="login-password">
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' name='password' />
        </div>
        <button type='submit' id='login-submit'>Log In</button>
      </form>
    </div >
  );

}