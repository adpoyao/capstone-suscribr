import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchAllSubscriptions} from './actions'

// sync
export const ADD_SUB_REQUEST = 'ADD_SUB_REQUEST';
export const addSubRequest = () => ({
	type: ADD_SUB_REQUEST
});

export const ADD_SUB_ERROR = 'ADD_SUB_ERROR';
export const addSubError = error => ({
	type: ADD_SUB_ERROR,
	error
});

export const ADD_SUB_SUCCESS = 'ADD_SUB_SUCCESS';
export const addSubSuccess = () => ({
	type: ADD_SUB_SUCCESS
});


//async
export const ADD_SUB = 'ADD_SUB';
export const addSub = (newSubscription) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(addSubRequest());
	return fetch(`${API_BASE_URL}/subscriptions`, {
		method: 'POST',
		body: JSON.stringify(newSubscription),
		headers: {
			'Content-Type': 'application/json', 
			'Accept': 'application/json' , 
			'Authorization': `Bearer ${authToken}`
		}
	}).then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(() => dispatch(addSubSuccess()))
		.then(() => dispatch(fetchAllSubscriptions(newSubscription.userId)))
		.catch(err => {
			dispatch(addSubError(err));
		});
};

