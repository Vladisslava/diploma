import React, {Component} from 'react';
import {Switch, Router} from 'react-router';
import PrivateRoute from '../components/private-route';
import Rules from "./Rules";
import Profile from "./Profile";
import BoxPerson from "./BoxPerson";

import Menu from "components/menu";
import Home from "pages/home/home";
import BoxAuth from "pages/box-auth/box-auth";
import Favourite from "pages/favourite/favourite";
import MyBoxes from "pages/my-boxes/my-boxes";
import BoxCreate from "pages/box-create/box-create";
import Box from "pages/box/box";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={this.props.history}>
                    <Switch>
                        <PrivateRoute path='/home/boxcreate' component={BoxCreate}/>
                        <PrivateRoute exact path='/home/box/:id' component={BoxAuth}/>
                        <PrivateRoute path='/home/boxperson/:boxId' component={BoxPerson}/>
                        <PrivateRoute path='/home/profile' component={Profile}/>
                        <PrivateRoute path='/home/myboxes' component={MyBoxes}/>
                        <PrivateRoute path='/home/favourite' component={Favourite}/>
                        <PrivateRoute exact path='/home/box' component={Box}/>
                        <PrivateRoute path='/home/rules' component={Rules}/>
                        <PrivateRoute path='/home' component={Home}/>
                    </Switch>
                </Router>
                <Menu/>
            </div>
        );
    }
}

export default App;
