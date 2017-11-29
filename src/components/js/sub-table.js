import React from 'react';
import {Link} from 'react-router-dom';
import '../css/sub-table.css';

export default function SubTable(props) {

    console.log(props.subscriptions);

    let subscriptionData = [];
    let subscriptionBoxes = [];

    if (props.subscriptions) {
        subscriptionData = props.subscriptions.map(sub => [sub.id, sub.subscription_name]);
    }

    subscriptionBoxes = subscriptionData.map((sub, index) => 
    <div className={"sub-box sub-box-" + sub[0]} key={index}>
        <span className="sub-text">
            <Link to={`/subscription/show/` + sub[0]}>{sub[1]}</Link>
        </span>
    </div>)

    console.log(subscriptionBoxes);
    return (
        <div className="sub-table"> 
            {subscriptionBoxes.map(sub => sub)}
        </div>
    )
}