import React, { Component } from 'react';

import Expense from '../../components/Expense/Expense';
import ExpenseContext from '../../ExpenseContext'

import './AccountPage.css';

export default class AccountPage extends Component {
  static contextType = ExpenseContext
  
  render() {

    if (this.context == null) {
      return <></>
    }

    const { expenses = [] } = this.context

    return (
      <div className='account'>
        <header className='account-title' role="banner">
          <h2>Current Transactions</h2>
        </header>
        <div className='transaction-list'>
          {expenses.map(expense =>
            <Expense {...expense} key={expense.id} />
          )}
        </div>
      </div>
    );
  }
}
