import React, {Component} from 'react';
import {Switch, Router} from 'react-router';
import PrivateRoute from '../components/private-route';
import BoxCreate from "../containers/BoxCreate.jsx";
import Rules from "./Rules";
import Profile from "./Profile";
import BoxPerson from "./BoxPerson";
import MyBoxes from "./MyBoxes";
import BoxPass from "./BoxPass";
import Favourite from "./Favourite";
import Box from "./Box";
import Menu from "../components/Menu";
import Home from "./Home/Home.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={this.props.history}>
                    <Switch>
                        <PrivateRoute path='/home/boxcreate' component={BoxCreate}/>
                        <PrivateRoute path='/home/box/:id' component={BoxPass}/>
                        <PrivateRoute path='/home/boxperson' component={BoxPerson}/>
                        <PrivateRoute path='/home/profile' component={Profile}/>
                        <PrivateRoute path='/home/myboxes' component={MyBoxes}/>
                        <PrivateRoute path='/home/favourite' component={Favourite}/>
                        <PrivateRoute path='/home/box' component={Box}/>
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
