import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    console.log(editedSub);
    this.props.dispatch(editSub(editedSub, this.props.match.params.sub))
    .then(()=> this.props.history.push(`/subscription/show/${this.props.match.params.sub}`))  
  }

  render() {
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
        <Link to={`/dashboard`}>X</Link>
        <form
          className="sub-edit"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
         )}>
        
        {error}

        <label htmlFor="sub-name"></label>
          <Field
            component={Input}
            type="text" 
            name="subscriptionName" 
            placeholder="Subscription Name"
          />
          
          <p className="icon">♫</p> 
          <label htmlFor="sub-category"></label>
          <Field name="category" component="select">
            <option value="music">Music</option>
            <option value="entertainment">Entertainment</option>
            <option value="work">Work</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="other">Other</option>
          </Field>
          
          <p className="sub-price">$</p>
          <label htmlFor="sub-price"></label>
          <Field
            type="number" 
            step="0.01" 
            component={Input}
            name="price" 
            placeholder="price" />
          <p> / </p>
          <label htmlFor="subfrequency"></label>
          <Field name="frequency" id="subfrequency" component="select">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Field>
       
          <p className="icon">*</p>
          <label htmlFor="sub-payment-type"></label>
          <Field 
            component={Input} 
            name="ccType" 
            placeholder="Payment: Method" />
          <label htmlFor="sub-poayment-digits"></label>
          <Field
            type="number"
            component={Input}
            name="ccDigits" 
            placeholder="Payment: Last 4 Digits" />
          <label htmlFor="sub-poayment-nickname"></label>
          <Field
            component={Input} 
            name="ccNickname" 
            placeholder="Payment: Nickname" />

          <p className="icon">*</p>
          <label htmlFor="sub-payment-date"></label>
          <Field 
            name="paymentDate"
            component={Input}
            type="date"/>
          
          <Field 
            component={Input}
            type="checkbox"
            name="active" 
            type="checkbox"
            id="subcheckbox" 
            defaultChecked />
          <label htmlFor="subcheckbox">Active?</label>

          <button disabled={this.props.pristine || this.props.submitting}>
              SAVE
          </button>  

        </form>
      </div>
    )
  }
}



const mapStateToProps = function(state, props){

  let idNumber = props.match.params.sub;
  let subscription = state.subscribr.subscriptions.find(sub => sub.id === idNumber);
  
  return {
  subscriptions: state.subscribr.subscriptions,
  loading: state.subscribr.loading,
  userId: state.auth.currentUser.id,
  postId: state.auth.currentUser.postId,
  loggedIn: state.auth.currentUser !== null,
  

  // Initial Values
  initialValues: {
      subscriptionName: subscription[0]['subscription_name'],
      category: subscription[0].category,
      price: subscription[0].price,
      frequency: subscription[0].frequency,
      ccType: subscription[0]['cc_type'],
      ccDigits: subscription[0]['cc_digits'],
      ccNickname: subscription[0]['cc_nickname'],
      paymentDate: subscription[0]['due_date'], 
      active: subscription[0].active
  }

  }
}

export default SubEdit = connect(
  mapStateToProps)(reduxForm({form: 'SubEdit'})(SubEdit));

