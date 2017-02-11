import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, hashHistory } from 'react-router'
import routes from './routes'
/**
 * Render App
 */
ReactDOM.render(
    <Provider store={store}>
	  	<Router history={hashHistory} routes={routes} />
	</Provider>,
    document.getElementById('root')
);