import React, { Component } from 'react';
import Modal from 'react-modal';

import ValidationError from '../ValidationError/ValidationError';
import Option from '../Option/Option';

import TransactionContext from '../../TransactionContext';
import { addTransaction } from '../../transactionHelper';
import config from '../../config';

import '../Modal.css';
import './TransactionModal.css';

const REGEX_DATE = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/

export default class TransactionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      category: {
        value: '',
        touched: false,
      },
      date: {
        value: '',
        touched: false,
      },
      cost: {
        value: '',
        touched: false
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { category, date, cost } = this.state
    const payee = e.target.payee.value
    const memo = e.target.memo.value
    addTransaction(this.context.addTransaction, category.value, date.value, cost.value, payee, memo);
    this.props.handleCloseModal();
  }

  // Need to figure out how to get categories from the database
  // and populate them in the options 


  updateCategory(category) {
    this.setState({
      category: { value: category, touched: true }
    })
  }


  validateCategory() {
    const category = this.state.category.value
    if (category === "")
      return ''
  }


  updateDate(date) {
    this.setState({
      date: { value: date, touched: true }
    })
  }

  validateDate() {
    const date = this.state.date.value.trim()
    if (date.length === 0)
      return 'Date is required'
    if (!date.match(REGEX_DATE))
      return 'Enter date in the format: MM/DD/YYYY'
  }

  updateCost(cost) {
    this.setState({
      cost: { value: cost, touched: true }
    })
  }

  validateCost() {
    const cost = this.state.cost.value.trim()
    if (cost.length === 0)
      return 'Cost is required'
  }

  static contextType = TransactionContext

  componentDidMount() {

    fetch(`${config.API_ENDPOINT}/:accountId/categories`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
      .then(options => {
        this.setState({ options })
      })
      .catch(error => {
        console.log({ error })
      })
  }

  render() {
    const costError = this.validateCost()
    const dateError = this.validateDate()
    const categoryError = this.validateCategory()
    const { options = [] } = this.state

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
          <form className="new-transaction-form" onSubmit={e => this.handleSubmit(e)}>
            <div className='transaction-category'>
              <label htmlFor="category">Category*: </label>
              <select
                value={this.state.category.value}
                onChange={e => this.updateCategory(e.target.value)}
                id="category" name='category' >
                <option value="" disabled>Select one</option>
                {options.map(option =>
                  <Option value={option.category} key={option.category} />
                )}
              </select>
              {this.state.category.touched && (
                <ValidationError message={categoryError} />
              )}
            </div>

            <div className="transaction-date">
              <label htmlFor='date'>Date* </label>
              <input type='text' id='cost' name="date" placeholder="e.g. 12/31/2020"
                onChange={e => this.updateDate(e.target.value)} required="" />
              {this.state.date.touched && (
                <ValidationError message={dateError} />
              )}
            </div>

            <div className="transaction-cost">
              <label htmlFor="cost">Cost*: $</label>
              <input type='number' id='cost' name='cost' placeholder='25'
                onChange={e => this.updateCost(e.target.value)} required />
              {this.state.cost.touched && (
                <ValidationError message={costError} />
              )}
            </div>

            <div className='transaction-payee'>
              <label htmlFor='payee'>Payee: </label>
              <input type='text' id='payee' name='payee' placeholder='Walmart' />
            </div>

            <div className="transaction-memo">
              <label htmlFor='memo'>Memo: </label>
              <textarea id='memo' name='memo' rows='3'></textarea>
            </div>
          </form>

          <button
            type='submit'
            id='transaction-submit'
           >Add transaction</button>
          <button onClick={this.props.handleCloseModal}>Close</button>
        </div>
      </Modal>
    );
  }

}