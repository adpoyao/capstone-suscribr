import {FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS} from '../actions/actions';
import {ADD_SUB_REQUEST, ADD_SUB_ERROR, ADD_SUB_SUCCESS} from '../actions/add-sub';
import {EDIT_SUB_REQUEST, EDIT_SUB_ERROR, EDIT_SUB_SUCCESS} from '../actions/edit-sub';
import {DEL_SUB_REQUEST, DEL_SUB_ERROR, DEL_SUB_SUCCESS} from '../actions/del-sub';


const initialState = {
	login: false,
	displayAbout: false,
	userId: null,
	loading: false,
	error: null,
	subscriptions: []
};

export const subscribrReducer = (state=initialState, action) => {
	if (
		action.type === FETCH_REQUEST ||
		action.type === ADD_SUB_REQUEST ||
		action.type === EDIT_SUB_REQUEST ||
		action.type === DEL_SUB_REQUEST
	) {
		return Object.assign({}, state, {
			loading: true,
			error: false
		});
	}

	else if (
		action.type === FETCH_ERROR ||
		action.type === ADD_SUB_ERROR ||
		action.type === EDIT_SUB_ERROR ||
		action.type === DEL_SUB_ERROR
	) {
		return Object.assign({}, state, {
			loading: false,
			error: true
		});
	}

	else if (
		action.type === ADD_SUB_SUCCESS ||
		action.type === EDIT_SUB_SUCCESS ||
		action.type === DEL_SUB_SUCCESS
	) {
		return Object.assign({}, state, {
			loading: false,
			error: false
		});
	}

	else if (action.type === FETCH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: false,
			subscriptions: [...action.subscriptions]
		});
	}
	return state;
};