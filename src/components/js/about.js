import React from 'react';
import {Link} from 'react-router-dom';

import Logout from './logout';
import NavBar from './nav-bar';

import '../css/about.css';

export default function About() {
    return(
        <div className="about-container">
            <Logout />
            <NavBar />
            <Link to={`/dashboard`} className="x-out">X</Link>
            <section className="about-contents">
                <h3>About Subscribr</h3>
                <div className="about-1">
                    <h4>SUBSCRIBR</h4>
                    <p className="about-1-p">
                        Subscribr is an app to manage your subscriptions. 
                        <br></br><br></br>
                        Using Subscribr, you can keep tabs on what you're signed up for, 
                        how you're paying for your subscriptions, and most importantly, 
                        how much you're spending as a whole and on each individual subscription.
                    </p>
                </div>
            </section>
        </div>
    )
}