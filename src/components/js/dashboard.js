import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import Logout from './logout';
import NavBar from './nav-bar';
import Circle from './circle';
import SubTable from './sub-table';

import '../css/dashboard.css';
import { fetchAllSubscriptions } from '../../actions/actions';

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchAllSubscriptions(this.props.userId))
    }

    render() {
        let monthly = [];
        let yearly = [];
        if (this.props.subscriptions) {
            monthly = this.props.subscriptions.filter(sub => sub.frequency === 'monthly')
            yearly = this.props.subscriptions.filter(sub => sub.frequency === 'annually')
        }
        let subs = monthly.length + yearly.length;

        let monthlyCost = 0;
        let yearlyCost = 0;
        let annualCost = 0;

        if (monthly) {
            for (let i = 0; i < monthly.length; i++) {
                monthlyCost += monthly[i].price;
            }

            monthlyCost = (Math.round(monthlyCost*100))/100
        }

        if (yearly) {
            for (let i = 0; i < yearly.length; i++) {
                yearlyCost += yearly[i].price;
            }
        }
        annualCost = (yearlyCost + (Math.round(monthlyCost*12*100))/100);
        
        return (
            <div className="dashboard-container">
                <Logout />
                <NavBar />
                <div className="loading-container">{this.props.loading ? <span className="loading">Loading . . .</span> :
                    <div className="circles-sub-table">
                        <div className="circles">
                            <Circle
                                numberValue={subs}
                                textValue={subs === 1 ? "Subscription" : "Subscriptions"}/>
                            <Circle 
                                numberValue={"$" + monthlyCost}
                                textValue="Monthly Total"/>
                            <Link to={`/summary`}>
                                <Circle 
                                    numberValue={"$" + annualCost}
                                    textValue="Yearly Total"/>
                            </Link>
                        </div>
                        <Link to={`/subscription/add`}>ADD NEW SUBSCRIPTION</Link>
                        <SubTable subscriptions={this.props.subscriptions}/>
                    </div>
             }</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subscriptions: state.subscribr.subscriptions,
    loading: state.subscribr.loading,
    userId: state.auth.currentUser.id,
    loggedIn: state.auth.currentUser !== null
})


export default connect(mapStateToProps)(Dashboard)