export const FETCH_BATTLES = 'FETCH_BATTLES'; // action types
export const FETCH_BATTLES_SUCCESS = 'FETCH_BATTLES_SUCCESS';

export function fetchBattles() {
	return(
		{
			type: FETCH_BATTLES
		})
}