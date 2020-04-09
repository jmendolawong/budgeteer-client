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

/*
      <section>
        <header>
          <h3>{props.store[0].category}</h3>
          <p>{props.store[0].date}</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>${props.store[0].cost}</dd>
          <dt>Payee</dt>
          <dd>{props.store[0].payee}</dd>
        </dl>
        <blockquote>{props.store[0].memo}</blockquote>
      </section>

      <section>
        <header>
          <h3>{props.store[1].category}</h3>
          <p>{props.store[1].date}</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>${props.store[1].cost}</dd>
          <dt>Payee</dt>
          <dd>{props.store[1].payee}</dd>
        </dl>
        <blockquote>{props.store[1].memo}</blockquote>
      </section>
      <section>
        <header>
          <h3>{props.store[2].category}</h3>
          <p>{props.store[2].date}</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>${props.store[2].cost}</dd>
          <dt>Payee</dt>
          <dd>{props.store[2].payee}</dd>
        </dl>
        <blockquote>{props.store[2].memo}</blockquote>
      </section>
      <section>
        <header>
          <h3>{props.store[3].category}</h3>
          <p>{props.store[3].date}</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>${props.store[3].cost}</dd>
        </dl>
      </section>
*/