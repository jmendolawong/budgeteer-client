import React, { Component } from 'react';

import Transaction from '../../components/Transaction/Transaction';
import TransactionContext from '../../TransactionContext'

import './AccountPage.css';

export default class AccountPage extends Component {
  static contextType = TransactionContext
  
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
