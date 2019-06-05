import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch, Redirect} from 'react-router';
import PrivateRoute from 'components/private-route';

import './index.css';
import 'react-notifications/lib/notifications.css';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history';
import configureStore from 'store/configureStore';
import {NotificationContainer} from 'react-notifications';

import Home from './pages/home';
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Logout from "./pages/logout";
import {ForgotPassword} from "./pages/forgot-password";

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <Switch>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/forgot-password' component={ForgotPassword}/>
                <PrivateRoute path='/home' component={Home}/>
                <PrivateRoute path='/logout' component={Logout}/>
                <Redirect exact from="/" to="/home"/>
            </Switch>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
