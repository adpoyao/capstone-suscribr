import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form'
import {normalizeResponseErrors} from './utils';

//ASYNC
export const ADD_USER = 'ADD_USER';
export const addUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
		headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
		.catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
              new SubmissionError({
                  [location]: message
              })
          );
      }
    });
};
// returning(['id', 'username', 'first_name', 'last_name', 'email']);
