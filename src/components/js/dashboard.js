import React from 'react';

import {connect} from 'react-redux';

import Logout from './logout';
import NavBar from './nav-bar';
// import Circle from './circle';
// import SubTable from '.sub-table';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subscriptions: ['Spotify', 'Netflix', 'Hulu', 'ElephantSQL', 'NYT'],
			monthlyCost: 40,
			paymentsDue: 3
		};
	}

    render() {
        return (
            <div className="dashboard-container">
                <Logout />
                <NavBar />
                {/* <Circle subCount={this.state.subscriptions.length}/> */}
                {/* <Circle paymentsDue={this.state.paymentsDue}/> */}
                {/* <Circle monthlyCost={this.state.monthlyCost}/> */}
                {/* <SubTable /> */}
            </div>
        )
    }
}

// export default connect(mapStateToProps)(Dashboard)