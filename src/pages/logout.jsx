import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userLogout} from '../store/actions/auth.actions';

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>logout</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(userLogout, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Logout));
