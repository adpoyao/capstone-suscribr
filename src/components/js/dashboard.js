import React from 'react';

import {connect} from 'react-redux';

import Logout from './logout';
import NavBar from './nav-bar';
import Circle from './circle';
import SubTable from './sub-table';

import '../css/dashboard.css';
import { fetchAllSubscriptions } from '../../actions';

export class Dashboard extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
    //         subscriptions: [
    //             {
    //                 id: 1,
    //                 name: 'Spotify Premium',
    //                 category: 'music',
    //                 price: 9.99,
    //                 frequency: 'monthly',
    //                 cc_type: 'visa',
    //                 cc_digits: 1234,
    //                 cc_nickname: 'Andy\'s Visa',
    //                 due_date: '2017-12-12'
    //                 },
    //             {
    //                 id: 2,
    //                 name: 'Netflix',
    //                 category: 'entertainment',
    //                 price: 11.99,
    //                 frequency: 'monthly',
    //                 cc_type: 'visa',
    //                 cc_digits: 1234,
    //                 cc_nickname: 'Andy\'s Visa',
    //                 due_date: '2017-12-15'
    //                 },
    //             {
    //                 id: 3,
    //                 name: 'Hulu',
    //                 category: 'entertainment',
    //                 price: 8.99,
    //                 frequency: 'monthly',
    //                 cc_type: 'visa',
    //                 cc_digits: 5678,
    //                 cc_nickname: 'Eddie\'s MasterCard',
    //                 due_date: '2017-12-24'
    //                 },
    //         ],
	// 		monthlyCost: 40,
	// 		paymentsDue: 3
	// 	};
    // }
    
    componentDidMount() {
        this.props.dispatch(fetchAllSubscriptions())
    }

    render() {
        
        return (
            <div className="dashboard-container">
                <Logout />
                <NavBar />
                <div className="circles">
                    <Circle
                        className="subCount-circle" 
                        numberValue={this.state.subscriptions.length}
                        textValue="Subscriptions"/>
                    <Circle 
                        className="paymentDue-circle" 
                        // numberValue={this.state.paymentsDue}
                        textValue="Payments due this week"/>
                    <Circle 
                        className="monthlyCose-circle" 
                        // numberValue={this.state.monthlyCost}
                        textValue="Monthly total"/>
                </div>
                {/* <SubTable subscriptions={this.state.subscriptions}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    subscriptions: state.subscriptions
}

export default connect(mapStateToProps)(Dashboard)