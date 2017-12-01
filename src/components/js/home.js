import React from 'react';
import '../css/home.css';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

export class Home extends React.Component {
    render() {
    if (this.props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return(
        <div className="home-container">
            <div className="signup-login-container">
                <form action="/signup">
                    <button className="home-sign-up" type="submit" name="signup-button">Sign Up</button>
                </form>
                <form action="/login">
                    <button className="home-log-in" type="submit" name="login-button">Log In</button>
                </form>
            </div>
            <h1>⍚ Subscribr</h1>
            <p className="tagline">An app to keep track of all your subscriptions.</p>
        </div>
    )
    }
}

const matchStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null    
})

export default connect(matchStateToProps)(Home);