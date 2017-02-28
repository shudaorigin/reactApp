
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'
export const FETCH_DATA_FAIL='FETCH_DATA_FAIL'
export const SHOW_MESSAGE_FOR_ME='SHOW_MESSAGE_FOR_ME'
export const LOAD_MORE_WORK='LOAD_MORE_WORK'

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
	
export function addTodo(text) {
	/*
	fetch('http://192.168.20.92:3000/json/', {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}}).then(status)
		  .then(json)
		  .then(function(json) {
			   return {
				type: ADD_TODO,
				data:json
			}
		  }).catch(function(error) {
			console.log('request failed', error)
		  })
	*/
	 return function (dispatch) {
		/*
		return fetch('http://192.168.20.92:3000/json/', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
			}}).then(
		  sauce => dispatch(makeASandwich(text, sauce),
		  error => console.info(error))
		);
	  };
	  */
	     return dispatch => {
			fetch('http://192.168.20.92:3000/json/')
			  .then(res => res.json())
			  .then(json => dispatch(makeASandwich(text, json)));
		  };

}
}

export function loadMoreWorkAsync(dispatch){
  /* TODO: 请暂时无视我如此拙劣的dispatch行为 */
  /* 1. fetch之前，可以先发个pending的action */
  dispatch({
			type: ADD_TODO,
			text: '888'
		  });
  
  fetch('http://192.168.20.92:3000/json/').then(resp => {
    console.log('[resp]', resp.status);
    if (resp.status === 200) return resp.json();
    throw new Error('not 200 this time'); // 美滴很
  }).then(json => {
    /* 2. 异步结束了，发结果action */
    dispatch({
			  type: ADD_TODO
			});
  }).catch(error => {
    /* 3. 倒霉催的，发报错action */
    dispatch({
			  type: ADD_TODO
			});
  });
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