import React from 'react';
import {Link} from 'react-router-dom';
import './Expense.css'

export default function Expense(props) {
  return (
    <div className='expense'>
      <header className='expense-header'>
        <h3 className='expense-category'>{props.category}</h3>
        <div className='expense-date'>{props.date}</div>
        <div className='expense-cost'>${props.cost}</div>
        <div className='expense-payee'>{props.payee}</div>
      </header>
      <div className='expense-body'>
        <blockquote className='expense-memo'>{props.memo}</blockquote>
      </div>
      <div className='expense-options'>
        <Link to='/edit/:expenseId'>
          Edit
        </Link>
        <button className='delete-expense btn'>Delete</button>
      </div>

      
    </div >
  );

}