import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import battlesDataReducer from './reducers';
import rootSaga from './sagas'

// const reduxDevTools =
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const configureStore = () => {
	const store = createStore(battlesDataReducer, composeEnhancer(applyMiddleware(sagaMiddleWare)))

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('./reducers', () => {
				store.replaceReducer(battlesDataReducer);
			});
		}
	}
	sagaMiddleWare.run(rootSaga);


	return store;
};

export default configureStore


