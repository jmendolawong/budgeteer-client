import React from 'react';
//import './LoginPage.css';

export default function LoginPage() {

  return (
    <div className='LoginPage'>
      <p id='register'>New to Budgeteer? Sign up here</p>
      <form className="login-form">
        <div className="login-user">
          <label htmFor='user'>Username: </label>
          <input type='text' id='user' name='user' />
        </div>
        <div className="login-password">
          <label htmlFfor='password'>Password: </label>
          <input type='password' id='password' name='password' />
        </div>
        <button type='submit' id='login-submit'>Log In</button>
      </form>
    </div >
  );

}