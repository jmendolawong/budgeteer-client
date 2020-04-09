import React from 'react';
import Modal from 'react-modal';

import '../Modal.css';

export default function CategoryModal(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className='modal'
    >
      <div className='add-category'>
        <form class="category-form">
          <div class="category-name">
            <label for='name'>Category Name: </label>
            <input type='text' id='name' name='name' />
          </div>

        </form>
        <button type='submit' id='category-submit'>Add category</button>
        <button onClick={props.handleCloseModal}>Close</button>
      </div>
    </Modal>
  );

}