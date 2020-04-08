import React from 'react';
import { Link } from 'react-router-dom';
//import './RegisterPage.css';

export default function RegisterPage() {

  return (
    <div className='RegisterPage'>
      <p id='register'>Already have an account? <Link to='/authentication'>Log in.</Link></p>
      <form className="register-form">
        <div className="register-user">
          <label htmlFor='user'>Username: </label>
          <input type='text' id='user' name='user' />
        </div>
        <div className="register-password">
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' name='password' />
        </div>
        <button type='submit' id='register-submit'>Sign Up</button>
      </form>
    </div >
  );

}