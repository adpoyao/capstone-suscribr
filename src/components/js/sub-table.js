import React from 'react';

import '../css/sub-table.css';

export default function SubTable(props) {
    
    let subscriptionBoxes = [];

    if (props.subscriptions) {
        subscriptionBoxes = props.subscriptions.map((sub, index) => {
             (
                <div key={index}><a href={`/subscription/show/${sub.id}`} >{sub.name}</a></div>
            )
        })
    }

    console.log("subscriptionBoxes:", subscriptionBoxes);

    return (
        <div className="sub-table"> 
            {subscriptionBoxes}
        </div>
    )
}