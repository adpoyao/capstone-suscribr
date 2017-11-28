import React from 'react';
import '../css/circle.css';

export default function Circle(props) {
    return( 
        <div className="circle-container">
            <span>{props.numberValue}</span>
            <span>{props.textValue}</span>
        </div>
    )
}