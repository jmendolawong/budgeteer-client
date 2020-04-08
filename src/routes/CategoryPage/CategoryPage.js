import React from 'react';
//import './CategoryPage.css';

export default function CategoryPage() {

  return (
    <div className='add-category'>
      <header role="banner">
        <h2>Add Category</h2>
      </header>

      <section>
        <form class="category-form">
          <div class="category-name">
            <label for='name'>Category Name: </label>
            <input type='text' id='name' name='name' />
          </div>
          <button type='submit' id='category-submit'>Add category</button>
        </form>
      </section>


    </div>
  );

}