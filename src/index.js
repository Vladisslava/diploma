import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router';
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
import Home from "./containers/Home.jsx";
import Box from "./containers/Box.jsx";
import BoxPass from "./containers/BoxPass.jsx";
import BoxPerson from "./containers/BoxPerson.jsx";
import Profile from "./containers/Profile.jsx";
import BoxCreate from "./containers/BoxCreate.jsx";
import MyBoxes from "./containers/MyBoxes.jsx";
import Favourite from "./containers/Favourite.jsx";
import Rules from "./containers/Rules.jsx";
import Logout from "./containers/Logout.jsx";
import Menu from "./components/Menu";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path='/' component={App}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <PrivateRoute path='/home' component={Home}/>
                <PrivateRoute path='/box' component={Box}/>
                <PrivateRoute path='/boxpass' component={BoxPass}/>
                <PrivateRoute path='/boxperson' component={BoxPerson}/>
                <PrivateRoute path='/profile' component={Profile}/>
                <PrivateRoute path='/boxcreate' component={BoxCreate}/>
                <PrivateRoute path='/myboxes' component={MyBoxes}/>
                <PrivateRoute path='/favourite' component={Favourite}/>
                <PrivateRoute path='/rules' component={Rules}/>
                <PrivateRoute path='/logout' component={Logout}/>
                <Menu/>
            </Switch>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
