import React from 'react';
import '../css/home.css';

export default function Home() {
    return(
        <div className="home-container">
            <div className="signup-login-container">
                <form action="/signup">
                    <button type="submit" name="signup-button">Sign Up</button>
                </form>
                <form action="/login">
                    <button type="submit" name="login-button">Log In</button>
                </form>
            </div>
            <h1>🌶 Subscribr</h1>
            <p className="tagline">An app to keep track of all your subscriptions.</p>
        </div>
    )
}