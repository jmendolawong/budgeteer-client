import React from 'react';
import Modal from 'react-modal';

//import './CategoryPage.css';

export default function CategoryPage(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="overlay"
    >
      <div className='add-category'>
        <header role="banner">
          <h2>Add Category</h2>
        </header>
        <form class="category-form">
          <div class="category-name">
            <label for='name'>Category Name: </label>
            <input type='text' id='name' name='name' />
          </div>

        </form>
        <button type='submit' id='category-submit'>Add category</button>

      </div>
    </Modal>
  );

}