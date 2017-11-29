import {API_BASE_URL} from './config';
import {normalizeResponseErrors} from './actions/utils';

// sync
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
	type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
	type: FETCH_ERROR,
	error
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = subscriptions => ({
	type: FETCH_SUCCESS,
	subscriptions
});


//async
// export const fetchSubscription = () => dispatch => {};

export const FETCH_ALL_SUBSCRIPTIONS = 'FETCH_ALL_SUBSCRIPTIONS';
export const fetchAllSubscriptions = (userId) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchRequest());
	return fetch('http://localhost:8080/api/subscriptions', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json', 
			'Accept': 'application/json' , 
			'user_id': userId,
			'Authorization': `Bearer ${authToken}`
		}
	}).then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(fetchSuccess(data)))
		.catch(err => {
				dispatch(fetchError(err));
		});
};