import * as actions from '../actions/actions';

const initialState = {
	login: false,
	displayAbout: false,
	userId: null,
	loading: false,
	error: null,
	subscriptions: []
};

export const subscribrReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: false
		});
	}

	else if (action.type === actions.FETCH_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: true
		});
	}

	else if (action.type === actions.FETCH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: false,
			subscriptions: [...action.subscriptions]
		});
	}
	return state;
};