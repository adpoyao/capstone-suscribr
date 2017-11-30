import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchAllSubscriptions} from './actions'

// sync
export const EDIT_SUB_REQUEST = 'EDIT_SUB_REQUEST';
export const editSubRequest = () => ({
	type: EDIT_SUB_REQUEST
});

export const EDIT_SUB_ERROR = 'EDIT_SUB_ERROR';
export const editSubError = error => ({
	type: EDIT_SUB_ERROR,
	error
});

export const EDIT_SUB_SUCCESS = 'EDIT_SUB_SUCCESS';
export const editSubSuccess = () => ({
	type: EDIT_SUB_SUCCESS
});


//async
export const EDIT_SUB = 'EDIT_SUB';
export const editSub = (editedSub, paramId) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(editSubRequest());
	return fetch(`${API_BASE_URL}/subscriptions/${paramId}`, {
		method: 'PUT',
		body: JSON.stringify(editedSub),
		headers: {
			'Content-Type': 'application/json', 
			'Accept': 'application/json' , 
			'Authorization': `Bearer ${authToken}`
		}
	}).then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(() => dispatch(editSubSuccess()))
		.then(() => dispatch(fetchAllSubscriptions(editedSub.userId)))
		.catch(err => {
			dispatch(editSubError(err));
		});
};

