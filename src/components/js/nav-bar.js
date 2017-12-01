import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav-bar.css';

export default function NavBar() {
    return (
        <div>
            <h2>⍚ Subscribr</h2>
            <nav className="links-nav">
                <ul className="links-bar">
                    <li className="links-li"><Link to="/">HOME</Link></li>
                    <li className="links-li"><Link to="/">SETTINGS</Link></li>
                    <li className="links-li"><Link to="/about">ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    )
}