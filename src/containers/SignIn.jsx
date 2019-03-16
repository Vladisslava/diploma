import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignin} from '../store/actions/auth.actions';
import {getUserInfo} from '../store/actions/user.actions';

import '../index.css';
import surprise from '../assets/img/surprise.png';
import mail from '../assets/img/mail.png';
import key from '../assets/img/key.png';
import {NotificationManager} from 'react-notifications';

class Signin extends Component {
    signIn = async (event) => {
        event.preventDefault();

        const isLogin = await this.props.userSignin({
            username: event.target.inputEmail.value,
            password: event.target.inputPassword.value
        });

        if (isLogin) {
            await this.props.getUserInfo(this.props.userId);
            this.props.history.push('/home');
        } else {
            NotificationManager.error('Не верный логин или пароль');
        }
    };

    render() {
        return (
            <div className="background">
                <div className="registration background-mask">
                    <div className="container">
                        <img src={surprise} alt=""/>

                        <form className="registration_form" onSubmit={this.signIn}>
                            <h2 className="title">Вход</h2>

                            <div className="registration_input">
                                <img src={mail} alt=""/>
                                <input type="text" onChange={this.handleEmailChange} id="inputEmail" placeholder="Логин"
                                       required/>
                            </div>
                            <div className="registration_input">
                                <img src={key} alt=""/>
                                <input type="password" placeholder="Пароль" onChange={this.handlePasswordChange}
                                       id="inputPassword" required/>
                            </div>
                            <div className="registration_input registration_pass">
                                <Link to="/forgot-password">Забыли пароль?</Link>
                            </div>

                            <div className="registration_input wr-button wr-button__white">
                                <button className="button" type="submit">Войти</button>
                            </div>

                            <div className="registration_login">
                                Ещё не зарегистрированы?
                                <Link to="/signup"> Cоздать аккаунт</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userSignin: bindActionCreators(userSignin, dispatch),
        getUserInfo: bindActionCreators(getUserInfo, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
