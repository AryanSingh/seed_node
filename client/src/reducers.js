

import { FETCH_BATTLES_SUCCESS, FETCH_LOCATIONS_SUCCESS, SEARCH_BATTLES_SUCCESS } from "./actions";

function battlesDataReducer(state={battles: [], locations: []}, action){
	switch(action.type) {
		case FETCH_BATTLES_SUCCESS:
			return Object.assign({}, state,
				{
					battles: [...action.data]
				});
		case FETCH_LOCATIONS_SUCCESS:
			return Object.assign({}, state,
				{
					locations: [...action.data]
				});
		case SEARCH_BATTLES_SUCCESS:
			return Object.assign({}, state, {
				battles: [...action.data]
			})
		default:
			return state;
	}
}

export default battlesDataReducer;