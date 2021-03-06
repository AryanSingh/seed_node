export const FETCH_BATTLES = 'FETCH_BATTLES'; // action types
export const FETCH_BATTLES_SUCCESS = 'FETCH_BATTLES_SUCCESS';
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const SEARCH_BATTLES = 'SEARCH_BATTLES';
export const SEARCH_BATTLES_SUCCESS = 'SEARCH_BATTLES_SUCCESS';

export function fetchBattles() {
	return(
		{
			type: FETCH_BATTLES
		})
}

export function fetchLocations() {
	return(
		{
			type: FETCH_LOCATIONS
		}
	)
}

export function searchBattles(param) {
	return(
		{
			type: SEARCH_BATTLES,
			param: param
		}
	)
}