import React from 'react';
import '../css/nav-bar.css';

export default function NavBar() {
    return (
        <div>
            <h2>🌶 Subscribr</h2>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="#">SETTINGS</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>
            </nav>
        </div>
    )
}