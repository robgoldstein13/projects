import axios from 'axios';
import { ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, DELETE_COMMENT_ERROR } from './constants';

	export const triggerAddComment = (email, body) => {
		return dispatch => {
			return axios
			.post('http://localhost:5000/comments', {
				comment: {
					email,
					body
				},
			})
			.then(
				res => res.json(),
				error => dispatch(addCommentError(error.message))
			)
			.then(json => {
				dispatch(addCommentSuccess(json.data));
			})
		};
	};

	export const triggerSetComments = () => {
		return dispatch => {
			axios
			.get('http://localhost:5000/comments')
			.then(res => {
				dispatch(addCommentSuccess(res.data));
			})
			.catch(err => {
				dispatch(addCommentError(err.message));
			});
		}; 
	};

	export const triggerDeleteComments = id => {

		return dispatch => {
			axios
			.delete(`http://localhost:5000/comments/${id}`)
			.then(() => {
				dispatch(triggerSetComments());
			})
			.catch(err => {
				dispatch(deleteCommentError(err.message));
			});
		}; 
	};

	const addCommentSuccess = comment => ({
		type: ADD_COMMENT_SUCCESS,
		payload: {
			...comment,
		}
	});
	
	const addCommentError = error => ({
		type: ADD_COMMENT_ERROR,
		payload: {
			error,
		}
	});
	
	const deleteCommentError = error => ({
		type: DELETE_COMMENT_ERROR,
		payload: {
			error,
		}
	});