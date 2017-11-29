import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'

import {subscribrReducer} from './reducer';

export default createStore(combineReducers({
  subscribr: subscribrReducer,
  form: formReducer}),
   composeWithDevTools(applyMiddleware(thunk)));
