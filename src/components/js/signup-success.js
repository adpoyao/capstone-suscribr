import React from 'react';

import '../css/signup-success.css';

export default function SignupSuccess() {
    return(
        <div className="signup-success">
            <p>Congrats! Your account has been created successfully.</p>
            <form action="/login">
                <button type="submit">Login</button>
            </form>
        </div>
    )
}