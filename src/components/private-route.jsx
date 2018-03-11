import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import {connect} from "react-redux";

class PrivateRoute extends Component
{
    render()
    {
        const Component = this.props.component;
        const rest = {...this.props, component: undefined};

        return (
            <Route {...rest} render={props =>
                this.props.isUserAuth ?
                    <Component {...props}/> :
                    <Redirect to={{
                        pathname: "/signin",
                        state: {from: props.location}
                    }}/>
            }/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isUserAuth: state.user.token !== undefined
    }
}

export default connect(mapStateToProps)(PrivateRoute);