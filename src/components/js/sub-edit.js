import React from 'react';

import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';


import {required, nonEmpty} from '../../validators';
import {editSub} from '../../actions/edit-sub';

import Input from './input'
import Logout from './logout'
import NavBar from './nav-bar'

import '../css/sub-edit.css';

export class SubEdit extends React.Component {
  
  onSubmit(values) {
    const editedSub = {
      id: this.props.match.params.sub,
      subscriptionName: values.subscriptionName,
      category: values.category,
      price: values.price,
      frequency: values.frequency,
      ccType: values.ccType,
      ccDigits: values.ccDigits,
      ccNickname: values.ccNickname,
      dueDate: values.paymentDate,
      active: values.active,
      userId: this.props.userId
    }
    this.props.dispatch(editSub(editedSub, this.props.match.params.sub))
    .then(()=> this.props.history.push(`/subscription/show/${this.props.match.params.sub}`))  
  }
  
  idNumber = this.props.match.params.sub;
  

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />
    };

    let error;
    if (this.props.error) {
        error = (
            <div className="sub-edit-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    return (
      <div className="sub-edit-container">
        <Logout />
        <NavBar />
        <form
          className="sub-edit"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
         )}>
        <h3>Edit Subscription</h3>
        {error}
        <Link to={`/subscription/show/${this.idNumber}`} className="x-out">↩</Link>
        <label className="label" htmlFor="sub-name">Subscription Name</label>
        <Field
            component={Input}
            type="text" 
            name="subscriptionName" 
            placeholder="Subscription Name"
            className="sub-name-field"
          />
          {/* <hr></hr> */}
          {/* <span className="icon"></span>  */}
          <label className="label" htmlFor="sub-category">Category *</label>
          <Field name="category" component="select" className="sub-category-field">
            <option value="music">Music</option>
            <option value="entertainment">Entertainment</option>
            <option value="work">Work</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="other">Other</option>
          </Field>
          {/* <hr></hr> */}
          <span className="icon"></span>
          <label className="label" htmlFor="sub-price">Price *</label>
          <Field
            type="number" 
            step="0.01" 
            component={Input}
            name="price" 
            placeholder="price"
            className="sub-price-field" />
          
          <span className="divider"></span>
          
          <label htmlFor="subfrequency"></label>
          <Field name="frequency" id="subfrequency" component="select" className="sub-price-frequency">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Field>
          {/* <hr></hr> */}
          <span className="icon"></span>
          <label className="label" htmlFor="sub-payment-type">Card</label>
          <Field 
            component={Input} 
            name="ccType" 
            placeholder="Payment: Method"
            className="sub-payment-method-field" />
          <label htmlFor="sub-payment-digits"></label>
          <Field
            type="number"
            component={Input}
            name="ccDigits" 
            placeholder="Payment: Last 4 Digits"
            className="sub-payment-digits-field" />
          <label htmlFor="sub-payment-nickname"></label>
          <Field
            component={Input} 
            name="ccNickname" 
            placeholder="Payment: Nickname"
            className="sub-payment-nickname-field" />
          {/* <hr></hr> */}
          {/* <span className="label" className="icon"></span> */}
          <label htmlFor="sub-payment-date">Date *</label>
          <Field 
            name="paymentDate"
            component={Input}
            type="date"
            className="sub-payment-date-field"/>
          {/* <hr></hr> */}
          <label htmlFor="subcheckbox">Active Subscription? *</label>
          <Field 
            component={Input}
            type="checkbox"
            name="active" 
            type="checkbox"
            id="subcheckbox"
            className="sub-checkbox-field" 
            defaultChecked />

          <button className="edit-sub" disabled={this.props.pristine || this.props.submitting}>
              Save
          </button>  

        </form>
      </div>
    )
  }
}

const mapStateToProps = function(state, props){

  const idNumber = Number(props.match.params.sub);
  const subscriptionList = state.subscribr.subscriptions
  const subscription = subscriptionList.find(sub => {return sub.id === idNumber});
  const subDate = new Date(subscription['due_date']).toISOString().slice(0,10);
  
  return {
  subscriptions: state.subscribr.subscriptions,
  loading: state.subscribr.loading,
  userId: state.auth.currentUser.id,
  userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
  loggedIn: state.auth.currentUser !== null,
  
  //Initial Values
  initialValues: {
      subscriptionName: subscription['subscription_name'],
      category: subscription.category,
      price: subscription.price,
      frequency: subscription.frequency,
      ccType: subscription['cc_type'],
      ccDigits: subscription['cc_digits'],
      ccNickname: subscription['cc_nickname'],
      paymentDate: subDate,    
      active: subscription.active
  }

  }
}

export default SubEdit = connect(
  mapStateToProps)(reduxForm({form: 'SubEdit'})(SubEdit));

