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
export const fetchAllSubscriptions = () => dispatch => {
	dispatch(fetchRequest());
	return fetch('http://localhost:8080/api/subscriptions', {
		method: 'GET',
		headers: {'Content-Type': 'application/json', 'Accept': 'application/json' , 'user_id': '1'}
	}).then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(subs => dispatch(fetchSuccess(subs)))
		.catch(err => {dispatch(fetchError(err));});
};