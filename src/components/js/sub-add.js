import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './logout'
import NavBar from './nav-bar'

import '../css/sub-add.css';

export default class SubAdd extends React.Component {
  render() {
    return (
      <div className="sub-add-container">
        <Logout />
        <NavBar />
        <Link to={`/dashboard`}>X</Link>
        <form>
          <label htmlFor="sub-name">
            <input type="text" name="sub-name" placeholder="Subscription Name"></input>
          </label>

          <label htmlFor="sub-category">
            <p className="icon">♫</p> 
            <select name="sub-category">
              <option value="0">Music</option>
              <option value="1">Entertainment</option>
              <option value="2">Work</option>
              <option value="3">Lifestyle</option>
              <option value="4">Other</option>
            </select>
          </label>

          <label htmlFor="sub-price">
            <p className="sub-price">$</p>
            <input type="number" step="0.01" name="sub-price" placeholder="price"></input>
            <p> / </p>
            <select name="sub-frequency">
              <option value="0">Daily</option>
              <option value="1">Weekly</option>
              <option value="2" selected>Monthly</option>
              <option value="3">Annually</option>
            </select>
          </label>

          <label htmlFor="sub-payment-type">
            <p className="icon">*</p>
            <input type="text" name="sub-payment-type" placeholder="Payment: Method"></input>
            <input type="number" name="sub-payment-digits" placeholder="Payment: Last 4 Digits"></input>
            <input type="text" name="sub-payment-nickname" placeholder="Payment: Nickname"></input>
          </label>

          <label htmlFor="sub-payment-date">
            <p className="icon">*</p>
            <input type="date"></input>
          </label>

          <input name="sub-checkbox" type="checkbox" defaultChecked></input>
          <label htmlFor="sub-checkbox">Active?</label>

          <button type="submit">Add</button>

        </form>
      </div>
    )
  }
}