import React from 'react';
import './HomePage.css';
import Logo from '../../images/fist_logo.png';
import Record from '../../images/budgeting.png';
import Scales from '../../images/scales.png';
import Chart from '../../images/chart.png';

export default function HomePage() {

  return (
    <div className='homePage'>
      <header role="banner" id='money-control' >
        <div className='header-wrapper'>
          <div className='header-center'>
            <h2 className='scales'>Tip the financial scales in your favor</h2><span>
              <img src={Scales} alt='money scales' id='scales' /></span>
          </div>
        </div>
        <div className='title-description'>
          <p>Budgeteer is an expense tracker that helps you to become more aware of your spending habits and finances.</p>
          <p>More awareness = more control</p>
        </div>
      </header>

      <section>
        <header className='section-header' id='fight'>
          <h2>Financial power</h2>
        </header>
        <div className='section-content'>
          <img src={Logo} id='logo-img' alt='logo' />
          <p>When you know where your money's going, you're giving yourself control. Otherwise, at the end of the day (week, month), you're left with empty pockets and wondering where your money went.</p>
        </div>
      </section>

      <section>
        <header className='section-header expense-header'>
          <h2>Record your expenses</h2>
          <img src={Record} alt='record expenses' id='record' />
        </header>
        <div className='section-content expenses'>
          <p>Record all your purchases. Group your expenses into categories. Record who you're paying. Make notes and memos. Your future self will thank you.</p>
        </div>
      </section>

      <section>
        <header className='section-header' >
          <h2>Future Features</h2>
        </header>
        <div className='section-content'>
          <div className='reporting-subsection'>
            <img src={Chart} alt='chart' id='chart' />
            <h3>Reporting</h3>
          </div>
          <p>Visualize your spending habits. See the graphs and charts of your spending from the past 30 days. Understand where most of your spending habits reside.</p>
        </div>
      </section>

    </div >
  );

}