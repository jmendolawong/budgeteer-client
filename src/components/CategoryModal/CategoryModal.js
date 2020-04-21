import React, { Component } from 'react';
import Modal from 'react-modal';
import ValidationError from '../ValidationError/ValidationError';

import '../Modal.css';

export default class CategoryModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: {
        value: '',
        touched: false,
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    //const { category } = this.state
    //addCategory(this.context.addCategory, category.value)
  }

  updateCategory(category) {
    this.setState({
      category: {
        value: category,
        touched: true,
      }
    })
  }

  validateCategory() {
    if (this.state.category.value.trim() === 0)
      return 'Add a new category'
  }

  render() {
    const categoryError = this.validateCategory();

    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        overlayClassName="overlay"
        className='modal'
      >
        <div className='add-category'>
          <form className="category-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="category-name">
              <label htmlFor='name'></label>
              <input type='text' id='name' name='name' placeholder='New Category'
                onChange={e => this.updateCategory(e.target.value)} />
              {this.state.category.touched && (
                <ValidationError message={categoryError} />
              )}
            </div>

          </form>
          <button type='submit' id='category-submit'>Add category</button>
          <button onClick={this.props.handleCloseModal}>Close</button>
        </div>
      </Modal>
    );
  }
}