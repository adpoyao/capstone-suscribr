import React from 'react';

import {connect} from 'react-redux';

import Logout from './logout';
import NavBar from './nav-bar';

import {fetchAllSubscriptions} from '../../actions';

import '../css/sub-info.css';

export class SubInfo extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllSubscriptions())
    }

    render() {

        let subscriptions = this.props.subscriptions;
        let idNumber = this.props.match.params.sub;

        let sub = subscriptions.find(sub => sub.id === Number(idNumber));
        console.log(sub);

        return (
            <div className="sub-info-container">
                <Logout />
                <NavBar />
                <div className="sub-info">
                    <div className="loading-container">{this.props.loading ? <span className="loading">Loading . . .</span> :
                        <div className="h3-ul-container">
                            <h3>{sub.subscription_name}</h3>
                            <ul>
                                <li>♫ {sub.category}</li>
                                <li>$ {sub.price}/{sub.frequency}</li>
                                <li>* {sub.cc_type} {sub.cc_digits} {sub.cc_nickname}</li>
                                <li>* {sub.due_date}</li>
                            </ul>
                        </div>
                    }
                    </div>           
                </div>
            </div>
        )
    }
}

const matchStateToProps = state => ({
    subscriptions: state.subscriptions,
    loading: state.loading
})

export default connect(matchStateToProps)(SubInfo);