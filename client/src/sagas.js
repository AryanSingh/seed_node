import { put, takeLatest, all } from 'redux-saga/effects';
import {
	FETCH_BATTLES_SUCCESS, FETCH_BATTLES, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS, SEARCH_BATTLES,
	SEARCH_BATTLES_SUCCESS
} from "./actions";

// const apiUrl = 'http://localhost:5000'

const apiUrl =  process.env.NODE_ENV === 'production'
	? '/api'
	: 'http://localhost:5000/api'

function* fetchLocations() {
	const json = yield fetch(`${apiUrl}/battles/list`)
		.then(response => response.json());
	yield put({ type: FETCH_LOCATIONS_SUCCESS, data: json.data });
}

function* fetchBattles() {
	const json = yield fetch(`${apiUrl}/battles`)
		.then(response => response.json());
	console.log('data', json);
	yield put({ type: FETCH_BATTLES_SUCCESS, data: json.data });
}

function* searchBattles(action){
	let url = `${apiUrl}/battles/search?location=${action.param}`;
	if(!action.param){ url = `${apiUrl}/battles`}
	const json = yield fetch(url)
		.then(response => response.json());
	console.log('data', json);
	yield put({ type: SEARCH_BATTLES_SUCCESS, data: json.data });
}
function* battlesWatcher() {
	yield takeLatest(FETCH_BATTLES, fetchBattles)
}
function* locationsWatcher(){
	yield takeLatest(FETCH_LOCATIONS, fetchLocations)
}

function* searchWatcher(){
	yield takeLatest(SEARCH_BATTLES, searchBattles)
}
export default function* rootSaga() {
	yield all([
		locationsWatcher(),
		battlesWatcher(),
		searchWatcher()
	]);
}