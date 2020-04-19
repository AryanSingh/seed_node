import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_BATTLES_SUCCESS, FETCH_BATTLES, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS} from "./actions";

const apiUrl = 'http://localhost:5000'

function* fetchLocations() {
	const json = yield fetch(`${apiUrl}/api/battles/list`)
		.then(response => response.json());
	yield put({ type: FETCH_LOCATIONS_SUCCESS, data: json.data });
}

function* fetchBattles() {
	const json = yield fetch(`${apiUrl}/api/battles`)
		.then(response => response.json());
	console.log('data', json);
	yield put({ type: FETCH_BATTLES_SUCCESS, data: json.data });
}
function* battlesWatcher() {
	yield takeLatest(FETCH_BATTLES, fetchBattles)
}
function* locationsWatcher(){
	yield takeLatest(FETCH_LOCATIONS, fetchLocations)

}
export default function* rootSaga() {
	yield all([
		locationsWatcher(),
		battlesWatcher()
	]);
}