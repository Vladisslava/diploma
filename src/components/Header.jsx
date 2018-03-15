import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';

import menu from '../img/menu.png';
import surprise from '../img/surprise.png';


function Header(props) {
    return (
        <header className="header">
            <div className="header_menu">
                <img className="menu-active" src={menu} alt=""/>
            </div>
            <div className="header_name">
                <span>{props.title}</span>
            </div>
            <div className="header_logo">
                <img src={surprise} alt=""/>
            </div>
        </header>
    );
}


export default Header;