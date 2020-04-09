import React, { Component } from 'react';
//import './TransactionPage.css';

export default class Transaction extends Component {
  render() {
    if (!this.props.showTransModal) {
      return null;
    }
    return (
      <section>
        <form class="new-transaction">
          <label for="category">Choose a category:</label>
          <select id="category" name='category' required>
            <option value='shopping'>Shopping</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="gas">Gas</option>
            <option value="rent">Rent/Mortgage</option>
            <option value="utilities">Utilities</option>
          </select>
          <div class="transaction-date">
            <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" />
            <input type="number" name="date-day" class="date-day" placeholder="01" min="1" max="31" required="" />
            <input type="number" name="date-year" class="date-year" placeholder="2020" min="2019" max="2020" required="" />
          </div>
          <div class="transaction-cost">
            <label for="cost">Cost: $</label>
            <input type='number' id='cost' name='cost' placeholder='25' required />
          </div>
          <div class='transaction-payee'>
            <label for='payee'>Payee: </label>
            <input type='text' id='payee' name='payee' placeholder='Walmart' />
          </div>
          <div class="transaction-memo">
            <label for='memo'>Note/memo</label>
            <textarea id='memo' name='memo' rows='15'></textarea>
          </div>
          <button type='submit' id='transaction-submit'>Add transaction</button>
        </form>
      </section>
    );
  }
}