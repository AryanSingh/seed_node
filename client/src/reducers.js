

import { FETCH_BATTLES_SUCCESS } from "./actions";

function battlesDataReducer(state={battles: []}, action){
	switch(action.type) {
		case FETCH_BATTLES_SUCCESS:
			return Object.assign({}, state,
				{
					battles: [...state.battles, action.data]
				});
		default:
			return state;
	}
}

export default battlesDataReducer;