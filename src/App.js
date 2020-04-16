import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './config'
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
import ExpenseContext from './ExpenseContext'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      isLoggedIn: false,
      error: null,
    }
  }

  componentDidMount() {

    fetch(`${config.API_ENDPOINT}/:accountId`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
      .then(expenses => {
        window.sessionStorage.setItem('sessionExpenses', JSON.stringify(expenses))
        this.setState({ expenses })
      })
      .catch(error => {
        console.log({ error })
      })
  }

  render() {
    const contextValue = {
      expenses: this.state.expenses,
      isLoggedIn: this.state.isLoggedIn,
    }

    return (
      <ExpenseContext.Provider value={contextValue}>
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
                component={AccountPage} />
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
        </div>
      </ExpenseContext.Provider>

    );
  }
}