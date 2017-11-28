import React from 'react';

import '../css/sub-table.css';

export default function SubTable(props) {
    const subscriptions = props.subscriptions.map((sub, index) => {
        return (
            <div key={index}><a href={`/subscription/show/${sub.id}`} >{sub.name}</a></div>
        )
    })

    return (
        <div className="sub-table"> 
            {subscriptions}
        </div>
    )
}