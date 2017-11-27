import React from 'react';

export default function Home() {
    return(
        <div className="home-container">
            <form action="/signup">
                <button type="submit" name="signup-button">Sign Up</button>
            </form>
            <form action="/login">
                <button type="submit" name="login-button">Log In</button>
            </form>
            <h1>🌶 Subscribr</h1>
            <p>An app to keep track of all your subscriptions.</p>
        </div>
    )
}