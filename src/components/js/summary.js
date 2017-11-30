import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';
import NavBar from './nav-bar';

import {connect} from 'react-redux';
import {fetchAllSubscriptions} from '../../actions/actions';

import '../css/summary.css';

export class Summary extends React.Component {
    componentDidMount() {
      if (!this.props.loggedIn) {
        return;
    }
    
    this.props.dispatch(fetchAllSubscriptions(this.props.userId))
}
  sortSubs(categorizedSubs, index, position, subs) {
      categorizedSubs[index].subList.push(subs[position]);
      categorizedSubs[index].total += subs[position].price;
  }

  render() {
    const subs = this.props.subscriptions;

    const categorizedSubs = [
      {category: 'music', subList: [], total: 0},
      {category: 'entertainment', subList: [], total: 0},
      {category: 'lifestyle', subList: [], total: 0},
      {category: 'work', subList: [], total: 0},
      {category: 'other', subList: [], total: 0}
    ]

    for (let i = 0; i < subs.length; i++) {
      //NB: categorizedSubs indeces determine the catgory
      switch (subs[i].category) {
        case 'music':
          this.sortSubs(categorizedSubs, 0, i, subs);
          break;
        case 'entertainment':
          this.sortSubs(categorizedSubs, 1, i, subs);
          break;
        case 'lifestyle':
          this.sortSubs(categorizedSubs, 2, i, subs);
          break;
        case 'work':
          this.sortSubs(categorizedSubs, 3, i, subs);
          break;
        case 'other':
          this.sortSubs(categorizedSubs, 4, i, subs);
          break;
        default:
          break;
        }
      }
      let roughSum = 0;
      let totalSum = 0;

      for (let j = 0; j < categorizedSubs.length; j++) {
        roughSum += categorizedSubs[j].total;
      }
      
      totalSum = Math.round((roughSum)*100)/100

      console.log(categorizedSubs);
      console.log(totalSum);

      const populatedSubLists = categorizedSubs.filter(sub => sub.subList.length > 0);
      
      const contentMap = populatedSubLists.map((each, index) => 
        <li className={`category-li ${each.category}-li`} key={index}>
          <div className={`category-div ${each.category}-div`}>
            <h4>{each.category}</h4>
            <ul className={`category-ul ${each.category}-ul`}>
              {each.subList.map((sub, index) => 
              <li key={index}>
                <div className="sub-name">{sub.subscription_name}</div>
                <div className="sub-price">{sub.price}</div>
              </li>)}
            </ul>
          </div>
        </li>)

    return (
      <div className="summary-container">
        <Logout />
        <NavBar />
        <Link to={`/dashboard`} className="x-out">X</Link>
        <h3>Monthly Breakdown</h3>
        <ul>
          {contentMap}
        </ul>
        <div className="summary-total">TOTAL: <div className="summary-total-amount">{totalSum}/month</div></div>
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


export default connect(mapStateToProps)(Summary)