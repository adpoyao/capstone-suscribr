import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {Link} from 'react-router-dom';


import '../css/logout.css';

export class Logout extends React.Component {
    
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null))
        clearAuthToken();
    }

    render() {
        return (
        <div className="logout-container">
            <Link to="/"><button onClick={() => this.logOut()}>Log out</button></Link>
        </div>
        )
    }
}

export default connect()(Logout);