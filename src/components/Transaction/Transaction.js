import React, { Component } from 'react';
import TransactionContext from '../../TransactionContext';
import './Transaction.css';
import TransactionApiService from '../../services/transaction-api-service';

export default class Transaction extends Component {
  static contextType = TransactionContext;

  render() {
    return (
      <div className='transaction'>
        <header className='transaction-header'>
          <div className='transaction-grid-wrapper'>
            <h3 className='item-category'>{this.props.category}</h3>
            <div className='item-date transaction-info'>{this.props.date}</div>
            <div className='item-payee transaction-info'>{this.props.payee}</div>
            <div className='item-cost transaction-info'>${this.props.cost}</div>
          </div>
        </header>
        <div className='transaction-body'>
          <blockquote className='transaction-memo'>{this.props.memo}</blockquote>
          <div className='transaction-options'>
            <button
              className='delete-transaction btn'
              onClick={() => {
                TransactionApiService.deleteTransaction(this.context.deleteTransaction, this.context.accountId, this.props.id)
              }}>Delete</button>
          </div>
        </div>
      </div >
    );
  }
}
