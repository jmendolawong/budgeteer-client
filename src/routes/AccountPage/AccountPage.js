import React, { Component } from 'react';

import Transaction from '../../components/Transaction/Transaction';
import TransactionContext from '../../TransactionContext';
import config from '../../config';
import TokenService from '../../services/token-service';

import './AccountPage.css';

export default class AccountPage extends Component {
  static contextType = TransactionContext

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/${this.context.accountId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
      .then(transactions => {
        window.sessionStorage.setItem('sessionTransactions', JSON.stringify(transactions))
        this.context.listTransactions(transactions)
      })
      .catch(error => {
        console.log({ error })
      })
  }

  render() {

    if (this.context == null) {
      return <></>
    }

    const { transactions = [] } = this.context

    return (
      <div className='account'>
        <header className='account-title' role="banner">
          <h2>Current Transactions</h2>
        </header>
        <div className='transaction-list'>
          {transactions.map(transaction =>
            <Transaction {...transaction} key={transaction.id} />
          )}
        </div>
      </div>
    );
  }
}
