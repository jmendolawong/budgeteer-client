import React from 'react';
import './TransactionPage.css';

export default function TransactionPage() {

  return (
    <div className='add-transaction'>
      <header role="banner">
        <h2>Add new transaction</h2>
      </header>

      <div className='new-transaction'>
        <form class="new-transaction-form">
          <div className='transaction-category'>
            <label for="category">Choose a category:</label>
            <select id="category" name='category' required>
              <option value='shopping'>Shopping</option>
              <option value="food">Food</option>
              <option value="health">Health</option>
              <option value="gas">Gas</option>
              <option value="rent">Rent/Mortgage</option>
              <option value="utilities">Utilities</option>
            </select>
          </div>
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
            <label for='memo'>Memo (optional)</label>
            <textarea id='memo' name='memo' rows='3'></textarea>
          </div>
          <button type='submit' id='transaction-submit'>Add transaction</button>
        </form>
      </div>

    </div>
  );

}