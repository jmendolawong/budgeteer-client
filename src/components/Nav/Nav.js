import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

import Submenu from '../Submenu/Submenu';

const isLoggedIn = true;

export default class Nav extends Component {


  /*
handleHover = () => {
  this.setState({
    showAddMenu: true,
  })
}

 handleLeave = () => {
  this.setState({
    showAddMenu: false,
  })
}

*/

  handleCatModal = e => {
    this.setState({
      showCatModal: true,
      showTransModal: false,
    })
  }

  handleTransModal = e => {
    this.setState({
      showTransModal: true,
      showCatModal: false
    })
  }

  onClose = e => {
    this.setState({
      showTransModal: false,
      showCatModal: false
    })
  }

  render() {
    return isLoggedIn
      ?
      (
        <div className='nav'>
          <ul>
            <li><Link to='/:accountId'>Account</Link></li>
            <li onMouseLeave={this.handleLeave}>
              <a href='' onMouseEnter={this.context.handleHover}>
                Add
              </a>
              {this.context.showSubMenu &&
                <Submenu
                  showCatModal={this.state.showCatModal}
                  handleCatModal={this.handleCatModal}
                  showTransModal={this.state.showTransModal}
                  handleTransModal={this.handleTransModal} />}
            </li>
            <li><Link to='/:accountId/reports'>Reports</Link></li>
            <li><Link to='/'>Log out</Link></li>
          </ul>
        </div >

      )
      : (
        <div className='nav'>
          <Link to='/authentication'>
            Log In
          </Link>
          <Link to='/register'>
            Register
          </Link>
        </div>
      );
  }
}