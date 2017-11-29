import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import '../css/login.css';

export function Login (props) {
    if(props.loggedIn) {
        return <Redirect to="/dashboard" />
    }
    return(
        <div className="signup">
            <h2>🌶 Subscribr</h2>
            <LoginForm />
        </div>
    )
}

// export default connect()(Signup)
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login)