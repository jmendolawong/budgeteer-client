import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import AccountPage from './routes/AccountPage/AccountPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';

import Nav from './components/Nav/Nav';
import TransactionContext from './TransactionContext';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      accountId: '',
      isLoggedIn: false,
      error: null,
    }
  }

  handleDeleteTransaction = transactionId => {
    const newTransactions = this.state.transactions.filter(transaction =>
      transaction.id !== transactionId
    )
    this.setState({
      transactions: newTransactions
    })
  }

  handleAddTransaction = transaction => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  handleUserStatus = status => {
    this.setState({
      isLoggedIn: status
    })
  }

  handleListTransactions = transactions => {
    this.setState({ transactions })
  }

  currentUser = accountId => {
    this.setState({ accountId })
  }


  render() {
    const contextValue = {
      transactions: this.state.transactions,
      isLoggedIn: this.state.isLoggedIn,
      accountId: this.state.accountId,
      currentUser: this.currentUser,
      updateUserStatus: this.handleUserStatus,
      deleteTransaction: this.handleDeleteTransaction,
      addTransaction: this.handleAddTransaction,
      listTransactions: this.handleListTransactions,
    }

    return (
      <TransactionContext.Provider value={contextValue}>
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
                component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </TransactionContext.Provider>

    );
  }
}