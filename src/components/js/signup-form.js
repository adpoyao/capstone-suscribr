import React from 'react';
// import {Field} from 'redux-form';

import '../css/signup-form.css';

export default function SignupForm() {
    return(
        <div className="signup-form">
            <form>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label for="first-name">
                        <input type="text" id="first-name" placeholder="first name"></input>
                    </label>
                    <label for="last-name">
                        <input type="text" id="last-name" placeholder="last name"></input>
                    </label>
                    <label for="email">
                        <input type="text" id="email" placeholder="email address"></input>
                    </label>
                    <label for="username">
                        <input type="text" id="username" placeholder="username"></input>
                    </label>
                    <label for="password">
                        <input type="password" id="password" placeholder="password"></input>
                    </label>
                    <label for="confirm-password">
                        <input type="password" id="confirm-password" placeholder="confirm password"></input>
                    </label>
                    <button type="submit" className="submit-signup">Submit</button>
                </fieldset>
                <p>Already have an account? Log in <a href="/login">here</a>.</p>
            </form>
        </div>
    )
}