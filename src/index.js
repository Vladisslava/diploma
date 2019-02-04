import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch, Redirect} from 'react-router';
import PrivateRoute from 'components/private-route';

import './index.css';
import 'react-notifications/lib/notifications.css';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'store/configureStore';
import {NotificationContainer} from 'react-notifications';

import App from './containers/App';
import SignIn from "./containers/SignIn.jsx";
import SignUp from "./containers/SignUp.jsx";
import Logout from "./containers/Logout.jsx";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <Switch>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <PrivateRoute path='/home' component={App}/>
                <PrivateRoute path='/logout' component={Logout}/>
                <Redirect exact from="/" to="/home"/>
            </Switch>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
