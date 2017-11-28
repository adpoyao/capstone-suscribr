import React from 'react';

import Logout from './logout';
import NavBar from './nav-bar';

import '../css/sub-info.css';

export default class SubInfo extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
            subscriptions: [
                {
                    id: 1,
                    name: 'Spotify Premium',
                    category: 'music',
                    price: 9.99,
                    frequency: 'monthly',
                    cc_type: 'visa',
                    cc_digits: 1234,
                    cc_nickname: 'Andy\'s Visa',
                    due_date: '2017-12-12'
                    },
                {
                    id: 2,
                    name: 'Netflix',
                    category: 'entertainment',
                    price: 11.99,
                    frequency: 'monthly',
                    cc_type: 'visa',
                    cc_digits: 1234,
                    cc_nickname: 'Andy\'s Visa',
                    due_date: '2017-12-15'
                    },
                {
                    id: 3,
                    name: 'Hulu',
                    category: 'entertainment',
                    price: 8.99,
                    frequency: 'month',
                    cc_type: 'visa',
                    cc_digits: 5678,
                    cc_nickname: 'Eddie\'s MasterCard',
                    due_date: '2017-12-24'
                    },
            ],
			monthlyCost: 40,
			paymentsDue: 3
		};
    }

    render() {

        let sub = this.state.subscriptions[0];

        return (
            <div className="sub-info-container">
                <Logout />
                <NavBar />
                <div className="sub-info">
                    <h3>{sub.name}</h3>
                    <ul>
                        <li>♫ {sub.category}</li>
                        <li>$ {sub.price}/{sub.frequency}</li>
                        <li>* {sub.cc_type} {sub.cc_digits} {sub.cc_nickname}</li>
                        <li>* {sub.due_date}</li>
                    </ul>
                </div>
            </div>
        )
    }
}