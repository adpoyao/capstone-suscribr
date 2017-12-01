import React from 'react';
import '../css/circle.css';

export default function Circle(props) {
    return(
        <div className={`circle-container ${props.className}`}>
            <span className="number-span">{props.numberValue}</span>
            <span className="caption-span">{props.textValue}</span>
        </div>
    )
}