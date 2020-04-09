import React from 'react';
//import './HomePage.css';

export default function HomePage() {

  return (
    <div className='homePage'>
      <header role="banner">
        <h1>Budgeteer</h1>
        <h2>Fight for control over your finances</h2>
        <p> [<em>Placeholder for image/logo</em>]</p>
      </header>

      <section>
        <header>
          <h3>Financial power</h3>
        </header>
        <p>[<em>placeholder for hand fist money</em>]</p>
        <p>When you know where your money's going, you're giving yourself control. Otherwise, at the end of the day (week, month), you're left with empty pockets and wondering where your money went</p>
      </section>

      <section>
        <header>
          <h3>Record your expenses</h3>
        </header>
        <p>[<em>placeholder for transactions screenshot</em>]</p>
        <p>Record all your purchases. Group your expenses into categories. Record who you're paying. Make notes and memos. Your future self will thank you.</p>
      </section>

      <section>
        <header>
          <h3>Reports</h3>
        </header>
        <p> [<em>placeholder for pie chart/graphs</em>]</p>
        <p>Visualize your spending habits. See the graphs and charts of your spending from the past 30 days. Understand where most of your spending habits reside</p>
      </section>
      
    </div >
  );

}