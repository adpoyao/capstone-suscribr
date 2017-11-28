import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {subscribrReducer} from './reducer';

export default createStore(subscribrReducer, composeWithDevTools(applyMiddleware(thunk)));
