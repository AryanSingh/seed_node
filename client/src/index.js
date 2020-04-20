import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App.jsx'
import configureStore from './store'
import createSagaMiddleware from 'redux-saga';
import './fonts/WarPriest3DItalic-M0Dv.ttf';
import './fonts/WarPriest3DRegular-Koxe.ttf';
import './fonts/WarPriestCondensed-2Z8X.ttf';
import './fonts/WarPriestCondensedItalic-vx8L.ttf';
import './fonts/WarPriestExpanded-wpY9.ttf';
import './fonts/WarPriestExpandedItalic-7l2D.ttf';
import './fonts/WarPriestItalic-m4xv.ttf';
import './fonts/WarPriestLeftalic-dw47.ttf';
import './fonts/WarPriestRegular-PanE.ttf';
import './fonts/WarPriestRotalic-L4p4.ttf';
import './fonts/WarPriestRotateRegular-XlKK.ttf';
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
