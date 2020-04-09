import React, { Component } from 'react';
//import './CategoryPage.css';

export default class Category extends Component {
  onClose = e => {
    this.props.onClose()
  }

  render() {

    if (!this.props.showCatModal) {
      return null;
    }
    return (
      <section>
        <form class="category-form">
          <div class="category-name">
            <label for='name'>Category Name: </label>
            <input type='text' id='name' name='name' />
          </div>
          <button onClick={e => this.props.onClose} id='category-cancel'>Cancel</button>
          <button type='submit' id='category-submit'>Add category</button>
        </form>
      </section >
    );
  }
}