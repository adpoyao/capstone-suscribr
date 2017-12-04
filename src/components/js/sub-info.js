import React from 'react';

import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {delSub} from '../../actions/del-sub'

import Logout from './logout';
import NavBar from './nav-bar';

import { fetchAllSubscriptions } from '../../actions/actions';

import '../css/sub-info.css';

export class SubInfo extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllSubscriptions(this.props.userId))
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />
        };
        
        const subscriptions = this.props.subscriptions;
        const idNumber = this.props.match.params.sub;
        const sub = subscriptions.find(sub => sub.id === Number(idNumber));
        
        const categoryIcons = ['🎵', '🎭', '🏖', '💼', '🎁']
        let iconIndex = null;        
        
        switch (sub.category) {
            case 'music':
                iconIndex = categoryIcons[0];
                break;
            case 'entertainment':
                iconIndex = categoryIcons[1];
                break;
            case 'lifestyle':
                iconIndex = categoryIcons[2];
                break;
            case 'work':
                iconIndex = categoryIcons[3];
                break;
            case 'other':
                iconIndex = categoryIcons[4];
                break;
        }

        let status;
        sub.active === true ? status = 'Active' : status = 'Not Active';
        const subDate = new Date(sub.due_date).toISOString().slice(0,10);

        return (
            <div className="sub-info-container">
                <Logout />
                <NavBar />
          
                <div className="sub-info">
                <h3 className="sub-name-header">{sub.subscription_name}</h3>
                <Link to={`/dashboard`} className="x-out">↩</Link>

                    <div className="loading-container">{this.props.loading ? <span className="loading">Loading . . .</span> :
                        <div className="h3-ul-container">
                            <div className="ul-container">
                                <ul className="sub-list">
                                    <li><span className="icon">{iconIndex}</span> {sub.category}</li>
                                    <li><span className="icon">💲</span> ${sub.price}/{sub.frequency}</li>
                                    <li><span className="icon">💳</span> {sub.cc_type} {sub.cc_digits} ({sub.cc_nickname})</li>
                                    <li><span className="icon">🗓</span> Subscribed on: {subDate} </li>
                                    <li><span className="icon">☑️</span>
                                        {status}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        }         
                    </div>
                </div>

                <Link to={`/subscription/edit/${idNumber}`}>
                    <button type="button" className="edit-button">Edit</button>
                </Link>
                <button type="button" className="delete-button" 
                    onClick={()=> {
                        this.props.dispatch(delSub(this.props.userId, idNumber))
                        .then(()=> this.props.history.push('/dashboard'))
                    }}>Delete</button>
            </div>         
        )
    }
}

const matchStateToProps = state => ({
    subscriptions: state.subscribr.subscriptions,
    loading: state.subscribr.loading,
    userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
    loggedIn: state.auth.currentUser !== null    
})

export default connect(matchStateToProps)(SubInfo);