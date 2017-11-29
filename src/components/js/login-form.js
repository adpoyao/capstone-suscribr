import React from 'react';
import {Link} from 'react-router-dom'
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import Input from './input'
import {login} from '../../actions/auth'

import '../css/login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
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
            <div className="login-form">
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>

                {error}

                <fieldset>
                    <legend>Log In</legend>
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>                
                </fieldset>
            </form>
            <p>Don't have an account yet? Sign up <Link to={'/signup'}><span className="signup-here">here</span></Link>.</p>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);