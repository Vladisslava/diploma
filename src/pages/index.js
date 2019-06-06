import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import PrivateRoute from 'components/private-route';

import Home from 'pages/home';
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Logout from "pages/logout";
import {ForgotPassword} from "pages/forgot-password";

export const App = () => (
    <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/forgot-password' component={ForgotPassword}/>
        <PrivateRoute path='/home' component={Home}/>
        <PrivateRoute path='/logout' component={Logout}/>
        <Redirect exact from="/" to="/home"/>
    </Switch>
);
