import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App.jsx'
import configureStore from './store'
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootSaga from './sagas'
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// registerServiceWorker();

const render = Component => {
	return ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Component />
			</Router>
		</Provider>,
		document.getElementById('root')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App.jsx').default;
		render(NextApp);
	});
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
