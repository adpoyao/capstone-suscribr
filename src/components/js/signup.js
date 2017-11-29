import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignupForm from './signup-form';
import SignupSuccess from './signup-success';

import '../css/signup.css';

export function Signup(props) {
    if(props.loggedIn) {
        return <Redirect to="/dashboard" />
    }
    return(
        <div className="signup">
            <h2>🌶 Subscribr</h2>
            <SignupForm />
            {/* <SignupSuccess /> */}
        </div>
    )
}

export default connect()(Signup)
// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(Signup)