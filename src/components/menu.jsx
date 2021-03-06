import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import img from '../assets/img/img.png';
import profile from '../assets/img/profile.png';
import home from '../assets/img/home.png';
import logout from '../assets/img/logout.png';
import favourite from '../assets/img/favourite.png';
import mybox from '../assets/img/mybox.png';
import rules from '../assets/img/rules.png';
import {menuClose} from "../store/actions/menu.actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {staticHost} from 'constants/api.constants';

class Menu extends React.Component {
    onClick = () => {
        this.props.menuClose();
    };

    render() {
        const {
            username,
            firstName,
            lastName,
            address,
            photo,
        } = this.props.user;

        return (
            <div>
                <div className={"wr-menu" + (this.props.isOpen ? ' active' : '')}>
                    <div className="wr-menu__header">
                        <div className="wr-menu__header-mask">
                            <div className="avatar avatar-small" style={{backgroundImage: `url(${staticHost + photo})`}}/>
                            <p className="wr-menu__name">{
                                firstName === '' || lastName  === '' ? username : firstName + ' ' + lastName
                            }</p>
                            <p className="wr-menu__adress">{
                                address === '' ? 'Добавить свой адрес в профиле' : address
                            }</p>
                        </div>
                    </div>
                    <ul className="mob-menu">
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/home">
                                <img src={home} alt=""/>Главная</Link>
                        </li>
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/home/profile">
                                <img src={profile} alt=""/>Профиль</Link>
                        </li>
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/home/myboxes">
                                <img src={mybox} alt=""/>Мои коробки</Link>

                        </li>
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/home/favourite">
                                <img src={favourite} alt=""/>Избранные</Link>

                        </li>
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/home/rules">
                                <img src={rules} alt=""/>Правила</Link>
                        </li>
                        <li className="mob-menu__item">

                            <Link onClick={this.onClick} to="/logout">
                                <img src={logout} alt=""/>Выйти</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={this.props.menuClose} className={"wr-notmenu" + (this.props.isOpen ? ' active' : '')}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: {
            username: state.user.username,
            firstName: state.user.firstName,
            lastName: state.user.lastName,
            address: state.user.address,
            photo: state.user.photo,
        },
        isOpen: state.menu.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        menuClose: bindActionCreators(menuClose, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
