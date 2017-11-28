import React from 'react';
import '../css/login-form.css';

export default function LoginForm() {
    return (
        <div className="login-form">
            <h2>🌶 Subscribr</h2>
            <form>
                <fieldset>
                    <legend>Log In</legend>
                    <label for="username">
                        <input type="text" id="username" placeholder="username"></input>
                    </label>
                    <label for="password">
                        <input type="password" id="password" placeholder="password"></input>
                    </label>
                    <button type="submit" className="submit-login">Submit</button>
                </fieldset>
            </form>
            <p>Don't have an account yet? Sign up <a href="/signup">here</a>.</p>
            </div>
    
    )
}