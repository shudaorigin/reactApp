
import { combineReducers } from 'redux'

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters,TODOS_AJAX,FETCH_DATA_FAIL,SHOW_MESSAGE_FOR_ME ,LOAD_MORE_WORK} from './actions.js'
function todos(state = [], action) {

    console.info(action);
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if(index == action.index){
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
	    case LOAD_MORE_WORK:
			return [
			        ...state,
				    {
						text: 'sdf',
						completed: false
					}
		           ]
		case SHOW_MESSAGE_FOR_ME:

				   if (state.length>1) return state;
				   console.info(state.length);

		           var data=[];
		           action.text.forEach(function(v, i, a) {
						data.push(
						{
							text: v.USERNAME,
						    completed: false
						}
						)
					});
					return data;
		/*
		   return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		*/
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos,
})

export default todoApp