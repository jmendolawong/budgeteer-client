import React from 'react';

import Expense from '../../components/Expense/Expense';

import './AccountPage.css';

export default function AccountPage(props) {

  return (
    <div className='account'>
      <header className='account-title' role="banner">
        <h2>Current Transactions</h2>
      </header>
      <div className='transaction-list'>
        {props.store.map(expense =>
          <Expense {...expense} key={expense.id} />
        )}
      </div>
    </div>
  );
}
