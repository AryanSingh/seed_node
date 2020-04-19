

import { FETCH_BATTLES_SUCCESS, FETCH_LOCATIONS_SUCCESS } from "./actions";

function battlesDataReducer(state={battles: [], locations: []}, action){
	switch(action.type) {
		case FETCH_BATTLES_SUCCESS:
			return Object.assign({}, state,
				{
					battles: [...state.battles, ...action.data]
				});
			case FETCH_LOCATIONS_SUCCESS:
			return Object.assign({}, state,
				{
					locations: [...state.locations, action.data]
				});
		default:
			return state;
	}
}

export default battlesDataReducer;