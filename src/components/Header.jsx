import React from 'react';
import '../index.css';

import menu from '../img/menu.png';
import surprise from '../img/surprise.png';
import {menuOpen} from "../store/actions/menu.acrions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header_menu">
                    <img onClick={this.props.menuOpen} className="menu-active" src={menu} alt=""/>
                </div>
                <div className="header_name">
                    <span>{this.props.title}</span>
                </div>
                <div className="header_logo">
                    <img src={surprise} alt=""/>
                </div>
            </header>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        menuOpen: bindActionCreators(menuOpen, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Header);