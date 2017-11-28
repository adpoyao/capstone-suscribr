export const fetchSubscription = () => dispatch => {};

export const FETCH_ALL_SUBSCRIPTIONS = 'FETCH_ALL_SUBSCRIPTIONS';
export const fetchAllSubscriptions = () => dispatch => {
	fetch('http://localhost:8080/api/subscriptions', {
		method: 'GET',
		headers: {'Content-Type': 'application/json', 'Accept': 'application/json' , 'user_id': '1'}
	}).then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(subs => console.log(subs));
};