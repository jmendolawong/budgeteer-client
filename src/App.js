import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import AccountPage from './routes/AccountPage/AccountPage';
//import TransactionPage from './routes/TransactionPage/TransactionPage';
//import CategoryPage from './routes/CategoryPage/CategoryPage';
import ReportsPage from './routes/ReportsPage/ReportsPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';

import Nav from './components/Nav/Nav';
import BudgeteerContext from './BudgeteerContext';

import STORE from './store';

export default class App extends Component {

  /*
  Can't get the hover part of the menu to trigger the set state via context. Had state set in the nav component and that worked well
  */


  // state constructor
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isLoggedIn: false,
      showSubMenu: false,
      showCatModal: false,
      showTransModal: false,
    }
  }

  handleHover = e => {
    this.setState({
      showsubMenu: true,
    })
  }

  handleLeave = () => {
    this.setState({
      showAddMenu: false,
    })
  }


  render() {
    // context
    const contextValue = {
      transations: this.state.transactions,
      isLoggedIn: this.state.isLoggedIn,
      handleHover: this.handleHover,
      handleLeave: this.handleLeave,
    }
    return (
      <BudgeteerContext.Provider value={contextValue}>
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
                path='/:accountId/reports'
                component={ReportsPage} />
              <Route
                component={NotFoundPage} />
            </Switch>
          </main>


          <footer>Footer</footer>
        </div>
      </BudgeteerContext.Provider>
    );
  }
}