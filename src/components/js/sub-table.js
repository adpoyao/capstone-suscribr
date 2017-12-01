import React from 'react';
import {Link} from 'react-router-dom';
import '../css/sub-table.css';

export default function SubTable(props) {


    let subscriptionData = [];
    let subscriptionBoxes = [];

    if (props.subscriptions) {
        subscriptionData = props.subscriptions.map(sub => [sub.id, sub.subscription_name, sub.category]);
    }

    subscriptionBoxes = subscriptionData.map((sub, index) => 
    <Link to={`/subscription/show/` + sub[0]}>
        <div className={"sub-box sub-box-" + sub[0]} key={index}>
            <span className="sub-button">{sub[1]}</span>
        </div>
    </Link>)

    return (
        <div className="sub-table">
            {subscriptionBoxes.map(sub => sub)}
        </div>
    )
}