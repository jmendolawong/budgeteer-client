import React from 'react';
import Modal from 'react-modal';
import '../Modal.css';
import './TransactionModal.css';

export default function TransactionModal(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className='modal'
    >
      <div className='new-transaction'>
        <form class="new-transaction-form">
          <div className='transaction-category'>
            <label for="category">Category: </label>
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
            <label for='date'>Date </label>
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
            <label for='memo'>Memo (optional) </label>
            <textarea id='memo' name='memo' rows='3'></textarea>
          </div>
        </form>
        <button type='submit' id='transaction-submit'>Add transaction</button>
        <button onClick={props.handleCloseModal}>Close</button>
      </div>
    </Modal>
  );

}