import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import TransactionContext from '../../TransactionContext';
import './Transaction.css';
import TransactionApiService from '../../services/transaction-api-service';

export default class Transaction extends Component {
  static contextType = TransactionContext;
  

  render() {

    return (
      <div className='transaction'>
        <header className='transaction-header'>
          <h3 className='transaction-category'>{this.props.category}</h3>
          <div className='transaction-date'>{this.props.date}</div>
          <div className='transaction-cost'>${this.props.cost}</div>
          <div className='transaction-payee'>{this.props.payee}</div>
        </header>
        <div className='transaction-body'>
          <blockquote className='transaction-memo'>{this.props.memo}</blockquote>
        </div>
        <div className='transaction-options'>
          <button
            className='delete-transaction btn'
            onClick={() => {
              TransactionApiService.deleteTransaction(this.context.deleteTransaction, this.context.accountId, this.props.id)
            }}>Delete</button>
        </div>


      </div >
    );
  }
}
