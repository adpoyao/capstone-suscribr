import React from 'react';

import SignupForm from './signup-form';
import SignupSuccess from './signup-success';

import '../css/signup.css';

export default function Signup() {
    return(
        <div className="signup">
            <h2>🌶 Subscribr</h2>
            <SignupForm />
            <SignupSuccess />
        </div>
    )
}