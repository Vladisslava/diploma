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

const history = createHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path='/' component={App}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/home' component={Home}/>
                <Route path='/box' component={Box}/>
                <Route path='/boxpass' component={BoxPass}/>
                <Route path='/boxperson' component={BoxPerson}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/boxcreate' component={BoxCreate}/>
                <Route path='/myboxes' component={MyBoxes}/>
                <Route path='/favourite' component={Favourite}/>
                <Route path='/rules' component={Rules}/>
            </Switch>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
