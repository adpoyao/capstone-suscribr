import React from 'react';

import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';

import {required, nonEmpty} from '../../validators';
import {addSub} from '../../actions/add-sub'

import Input from './input'
import Logout from './logout';
import NavBar from './nav-bar';

import '../css/sub-add.css';

export class SubAdd extends React.Component {
  onSubmit(values) {
    const newSubscription = {
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
    console.log('===newSubscription', newSubscription);
    this.props.dispatch(addSub(newSubscription))
    .then(()=> this.props.history.push('/dashboard'))  
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />
    };

    let error;
    if (this.props.error) {
        error = (
            <div className="sub-add-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    return (
      <div className="sub-add-container">
        <Logout />
        <NavBar />
        <Link to={`/dashboard`} className="x-out">✕</Link>
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
            name="subscriptionName" 
            placeholder="Subscription Name"
          />
          
          <span className="icon">♫</span> 
          <label htmlFor="sub-category"></label>
          <Field name="category" component="select">
            <option value="music">Music</option>
            <option value="entertainment">Entertainment</option>
            <option value="work">Work</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="other">Other</option>
          </Field>
          
          <span className="icon">$</span>
          <label htmlFor="sub-price"></label>
          <Field
            type="number" 
            step="0.01" 
            component={Input}
            name="price" 
            placeholder="price" />

          <span className="divider"> / </span>
          
          <label htmlFor="subfrequency"></label>
          <Field name="frequency" id="subfrequency" component="select">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Field>
       
          <span className="icon">*</span>
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

          <span className="icon">*</span>
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
              ADD
          </button>  

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
  loggedIn: state.auth.currentUser !== null  
  })

SubAdd = connect(
  mapStateToProps)(SubAdd);


export default reduxForm({
  form: 'addSub',
  initialValues: { active: true, frequency: "monthly"}

  // onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SubAdd);