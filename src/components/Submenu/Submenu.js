import React, { Component } from 'react';
//import './Submenu.css'

import Transaction from '../Transaction/Transaction';
import Category from '../Category/Category';

export default class Submenu extends Component {

  //Possible to get rid of this using context
  handleCatModal = e => {
    this.props.handleCatModal()
  }
  handleTransModal = e => {
    this.props.handleTransModal()
  }

  onClose() {
    this.props.onClose()
  }
  //Category and Transaction need to be moved to App and then context needs to be provided. Modal needs to open outside of the nav component


  render() {
    return (
      <div className='submenu'>
        <ul className='nav_submenu'>
          <li><button className='toggle-button' onClick={this.handleTransModal}>Transaction</button></li>
          <li><button className='toggle-button' onClick={this.handleCatModal}>Category</button></li>
        </ul>
        <Category onClose={this.onClose} showCatModal={this.props.showCatModal} />
        <Transaction onClose={this.onClose} showTransModal={this.props.showTransModal} />
      </div>
    );
  }
}