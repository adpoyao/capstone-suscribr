import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';

import {subscribrReducer} from './reducers/reducer';
import authReducer from './reducers/auth'

import {loadAuthToken, loadState, saveState} from './local-storage';
import {setAuthToken} from './actions/auth';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(combineReducers({
  subscribr: subscribrReducer,
  form: formReducer,
  auth: authReducer}),
   composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
    saveState(store.getState());
    }, 1000));

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;