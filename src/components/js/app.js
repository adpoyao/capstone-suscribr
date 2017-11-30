import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './home';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import SubInfo from './sub-info';
import SubAdd from './sub-add';
import SubEdit from './sub-edit';
import Summary from './summary';

import '../css/app.css';

export default function App() {
    return (
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/subscription/show/:sub" component={SubInfo}/>
              <Route exact path="/subscription/add" component={SubAdd}/>
              <Route exact path="/subscription/edit/:sub" component={SubEdit}/>
              <Route exact path="/summary" component={Summary}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }