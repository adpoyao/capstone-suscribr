import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './logout'
import NavBar from './nav-bar'

import '../css/summary.css';

export default class Summary extends React.Component {
  render() {
    return (
      <div className="summary-container">
        <Logout />
        <NavBar />
        <Link to={`/dashboard`}>X</Link>
        <h3>Monthly Summary</h3>
        <ul>
          {/* Will need to map each li below */}
          <li > * <div className="summary-item"> December 2017</div></li>
          <li> ♫ <div className="summary-item"> Music: $32.54 / month</div></li>
          <li> ♫ <div className="summary-item">Work: $22.06 / month</div></li>    
        </ul>
        <p className="summary-total">TOTAL: <div className="summary-total-amount">$54.60/month</div></p>
      </div>

    )
  }
}