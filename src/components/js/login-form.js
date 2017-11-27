import React from 'react';

export default function LoginForm() {
    return(
        <div className="login-form">
            <h2>🌶 Subscribr</h2>
            <form>
                <fieldset>
                    <legend>Log In</legend>
                    <label for="username">Username</label>
                    <input type="text" id="username"></input>
                    <label for="password">Password</label>
                    <input type="text" id="password"></input>
                    <button type="submit">Submit</button>
                </fieldset>
                <p>Don't have an account yet? Sign up <a href="/signup">here</a>.</p>
            </form>
        </div>
    )
}