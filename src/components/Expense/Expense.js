import React from 'react';
import './Expense.css'

export default function Expense(props) {
  return (
    <div className='expense'>
      <header className='expense-header'>
        <h3 className='expense-category'>{props.category}</h3>
      </header>
      <div className='expense-body'>
        <div className='expense-date'>{props.date}</div>
        <div className='expense-cost'>${props.cost}</div>
        <div className='expense-payee'>{props.payee}</div>
      </div>
      <blockquote className='expense-memo'>{props.memo}</blockquote>
    </div >
  );

}