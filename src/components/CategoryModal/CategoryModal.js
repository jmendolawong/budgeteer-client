import React from 'react';
import Modal from 'react-modal';

import '../Modal.css';

export default function CategoryModal(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className='modal'
    >
      <div className='add-category'>
        <form className="category-form">
          <div className="category-name">
            <label htmlFor='name'></label>
            <input type='text' id='name' name='name' placeholder='New Category'/>
          </div>

        </form>
        <button type='submit' id='category-submit'>Add category</button>
        <button onClick={props.handleCloseModal}>Close</button>
      </div>
    </Modal>
  );

}