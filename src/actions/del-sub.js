import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchAllSubscriptions} from './actions'

// sync
export const DEL_SUB_REQUEST = 'DEL_SUB_REQUEST';
export const delSubRequest = () => ({
	type: DEL_SUB_REQUEST
});

export const DEL_SUB_ERROR = 'DEL_SUB_ERROR';
export const delSubError = error => ({
	type: DEL_SUB_ERROR,
	error
});

export const DEL_SUB_SUCCESS = 'DEL_SUB_SUCCESS';
export const delSubSuccess = () => ({
	type: DEL_SUB_SUCCESS
});


//async
export const DEL_SUB = 'DEL_SUB';
export const delSub = (userId, paramId) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(delSubRequest());
	return fetch(`${API_BASE_URL}/subscriptions/${paramId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'user_id': userId,
			'Authorization': `Bearer ${authToken}`
		}
	}).then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(() => dispatch(delSubSuccess()))
		.then(() => dispatch(fetchAllSubscriptions(userId)))
		.catch(err => {
			dispatch(delSubError(err));
		});
};

