import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Router } from 'react-router-dom';

ReactDOM.render (
    <Router history={createHistory()}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>,
	document.getElementById('root'),
);
