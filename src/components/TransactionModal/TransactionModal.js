import React, { Component } from 'react';
import Modal from 'react-modal';

import ValidationError from '../ValidationError/ValidationError';

import TransactionContext from '../../TransactionContext';
import TransactionApiService from '../../services/transaction-api-service';

import '../Modal.css';
import './TransactionModal.css';

const REGEX_DATE = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/

export default class TransactionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        value: '',
      },
      date: {
        value: '',
      },
      cost: {
        value: '',
      },
      categoryError: '',
      dateError: '',
      costError: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateCategory()) {
      this.setState({ categoryError: this.validateCategory() })
    } else if (this.validateDate()) {
      this.setState({ categoryError: '', dateError: this.validateDate() })
    } else if (this.validateCost()) {
      this.setState({ categoryError: '', dateError: '', costError: this.validateCost() })
    }
    else {
      this.setState({ categoryError: '', dateError: '', costError: '', category: {value: '' }})
      const { category, date, cost } = this.state
      const payee = e.target.payee.value
      const memo = e.target.memo.value
      TransactionApiService.addTransaction(this.context.addTransaction, this.context.accountId, category.value, date.value, cost.value, payee, memo);
      this.props.handleCloseModal();
    }
  }

  updateCategory(category) {
    this.setState({
      category: { value: category }
    })
  }

  validateCategory() {
    const category = this.state.category.value
    if (category === "")
      return 'Select a category'
  }

  updateDate(date) {
    this.setState({
      date: { value: date }
    })
  }

  validateDate() {
    const date = this.state.date.value.trim()
    if (date.length === 0)
      return 'Date is required'
    if (!date.match(REGEX_DATE))
      return 'Error - date format must be MM/DD/YYYY'
  }

  updateCost(cost) {
    this.setState({
      cost: { value: cost }
    })
  }

  validateCost() {
    const cost = this.state.cost.value.trim()
    if (cost.length === 0)
      return 'Cost is required'
  }

  static contextType = TransactionContext;

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        overlayClassName="overlay"
        className='modal'
      >
        <div className='new-transaction'>
          <header>Add Transaction</header>
          <form className="new-transaction-form" onSubmit={e => this.handleSubmit(e)}>
            <div className='transaction-category'>
              <label htmlFor="category">Category*: </label>
              <select
                value={this.state.category.value}
                onChange={e => this.updateCategory(e.target.value)}
                id="category" name='category' >
                <option value="" defaultValue>Select one</option>
                <option value="Shopping">Shopping</option>
                <option value="Groceries">Groceries</option>
                <option value="Gym">Gym</option>
                <option value="Auto & Transport">Auto & Transport</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Travel">Travel</option>
                <option value="Home">Home</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills & Utilities">Bills & Utilities</option>
              </select>
              {<ValidationError message={this.state.categoryError} />}
            </div>

            <div className="transaction-date">
              <input type='text' id='date' name="date" placeholder="e.g. 12/31/2020"
                onChange={e => this.updateDate(e.target.value)} required="" />
              {<ValidationError message={this.state.dateError} />}
            </div>

            <div className="transaction-cost">
              <input type='number' id='cost' name='cost' placeholder='Cost'
                onChange={e => this.updateCost(e.target.value)} />
              {<ValidationError message={this.state.costError} />}
            </div>

            <div className='transaction-payee'>
              <input type='text' id='payee' name='payee' placeholder='Payee ' />
            </div>

            <div className="transaction-memo">
              <textarea
                id='memo'
                name='memo'
                rows="4"
                columns="30"
                placeholder="memo/additional notes"></textarea>
            </div>

            <button
              className='transaction-close'
              onClick={this.props.handleCloseModal}>
              Close
            </button>

            <button
              type='submit'
              className='transaction-submit btn'
            >Add</button>

          </form>
        </div>
      </Modal>
    );
  }

}