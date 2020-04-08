import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import AccountPage from './routes/AccountPage/AccountPage';
import TransactionPage from './routes/TransactionPage/TransactionPage';
import CategoryPage from './routes/CategoryPage/CategoryPage';
import ReportsPage from './routes/ReportsPage/ReportsPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';

import Nav from './components/Nav/Nav';

import STORE from './store';

export default class App extends Component {
  /*
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
  
      }
    }
  */

  render() {
    return (
      <div className='app'>
        <nav className='navbar'>
          <Nav />
        </nav>

        <main className='mainSection'>
          <Switch>
            <Route
              exact path='/'
              component={HomePage} />
            <Route
              path='/authentication'
              component={LoginPage} />
            <Route
              path='/register'
              component={RegisterPage} />
            <Route
              exact path='/:accountId'
              render={() =>
                <AccountPage store={STORE.expenses} />}
              />
            <Route
              path='/:accountId/add-transaction'
              component={TransactionPage} />
            <Route
              path='/:accountId/add-category'
              component={CategoryPage} />
            <Route
              path='/:accountId/reports'
              component={ReportsPage} />
            <Route
              component={NotFoundPage} />
          </Switch>
        </main>


        <footer>Footer</footer>
      </div>

    );
  }
}