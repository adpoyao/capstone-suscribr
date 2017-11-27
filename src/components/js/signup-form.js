import React from 'react';

export default function SignupForm() {
    return(
        <div className="login-form">
            <form>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label for="first-name">First name</label>
                    <input type="text" id="first-name"></input>
                    <label for="last-name">Last name</label>
                    <input type="text" id="last-name"></input>
                    <label for="email">Email</label>
                    <input type="text" id="email"></input>
                    <label for="username">Username</label>
                    <input type="text" id="username"></input>
                    <label for="password">Password</label>
                    <input type="text" id="password"></input>
                    <label for="confirm-password">Confirm Password</label>
                    <input type="text" id="confirm-password"></input>
                    <button type="submit">Submit</button>
                </fieldset>
                <p>Already have an account? Log in <a href="/login">here</a>.</p>
            </form>
        </div>
    )
}