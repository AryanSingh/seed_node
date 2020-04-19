import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_BATTLES_SUCCESS, FETCH_BATTLES} from "./actions";

const apiUrl = 'http://localhost:5000'

function* fetchBattles() {
	const json = yield fetch(`${apiUrl}/api/battles/list`)
		.then(response => response.json(), );
	yield put({ type: FETCH_BATTLES_SUCCESS, data: json.locations });
}
function* actionWatcher() {
	yield takeLatest(FETCH_BATTLES, fetchBattles)
}
export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}