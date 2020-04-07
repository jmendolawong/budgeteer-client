import React from 'react';
//import './AccountPage.css';

export default function AccountPage() {

  return (
    <div className='accountPage'>
      <header role="banner">
        <h2>Current Transactions</h2>
      </header>

      <section>
        <header>
          <h3>Groceries</h3>
          <p>4/6/2020</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>$50</dd>
          <dt>Payee</dt>
          <dd>Kroger</dd>
        </dl>
        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris.</blockquote>
      </section>

      <section>
        <header>
          <h3>Phone bill</h3>
          <p>3/26/2020</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>$72</dd>
          <dt>Payee</dt>
          <dd>AT&T</dd>
        </dl>
        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris.</blockquote>
      </section>
      <section>
        <header>
          <h3>Gym</h3>
          <p>3/12/2020</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>$25</dd>
          <dt>Payee</dt>
          <dd>YMCA</dd>
        </dl>
        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris.</blockquote>
      </section>
      <section>
        <header>
          <h3>Shopping</h3>
          <p>3/12/2020</p>
        </header>
        <dl>
          <dt>Cost</dt>
          <dd>$25</dd>
        </dl>
      </section>

    </div>
  );

}