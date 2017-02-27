
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'
export const FETCH_DATA_FAIL='FETCH_DATA_FAIL'
export const SHOW_MESSAGE_FOR_ME='SHOW_MESSAGE_FOR_ME'

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}