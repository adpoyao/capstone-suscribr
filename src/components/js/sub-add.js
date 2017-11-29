import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';

import {required, nonEmpty} from '../../validators';
import {addSub} from '../../actions/add-sub'

import Input from './input'
import Logout from './logout';
import NavBar from './nav-bar';

import '../css/sub-add.css';

export class SubAdd extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(addSub(
      //EDIT THIS
      values.username, values.password));
}

  render() {
    let error;
    if (this.props.error) {
        error = (
            <div className="login-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    return (
      <div className="sub-add-container">
        <Logout />
        <NavBar />
        <Link to={`/dashboard`}>X</Link>
        <form
          className="sub-name"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          
          {error}

          <label htmlFor="sub-name"></label>
          <Field
            component={Input}
            type="text" 
            name="sub-name" 
            placeholder="Subscription Name"
          />
          
          <label htmlFor="sub-category"></label>
          <p className="icon">♫</p> 
          <Field name="sub-category" component="select">
            <option value="0">Music</option>
            <option value="1">Entertainment</option>
            <option value="2">Work</option>
            <option value="3">Lifestyle</option>
            <option value="4">Other</option>
          </Field>
          
          <label htmlFor="sub-price"></label>
          <p className="sub-price">$</p>
          <Field
            // type="number" 
            // step="0.01" 
            component={Input}
            name="sub-price" 
            placeholder="price">
          <p> / </p>
          <label htmlFor="sub-frequency"></label>
          <Field name="sub-frequency" component="select">
            <option value="0">Daily</option>
            <option value="1">Weekly</option>
            <option value="2" selected>Monthly</option>
            <option value="3">Annually</option>
          </Field>
       
          <label htmlFor="sub-payment-type"></label>
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