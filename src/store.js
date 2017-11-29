import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'

import {subscribrReducer} from './reducers/reducer';
import authReducer from './reducers/auth'

export default createStore(combineReducers({
  subscribr: subscribrReducer,
  form: formReducer,
  auth: authReducer}),
   composeWithDevTools(applyMiddleware(thunk)));
