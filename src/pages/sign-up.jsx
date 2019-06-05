import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NotificationManager} from 'react-notifications';

import {userSignup} from '../store/actions/auth.actions';
import '../index.css';
import surprise from '../assets/img/surprise.png';
import user from '../assets/img/user.png';
import mail from '../assets/img/mail.png';
import key from '../assets/img/key.png';

class SignUp extends Component {
    submitData = async (event) => {
        event.preventDefault();

        const res = await this.props.userSignup({
            username: event.target.inputLogin.value,
            password: event.target.inputPassword.value,
            email: event.target.inputEmail.value,
        });

        if (res.error) {
            NotificationManager.error(res.msg);
        } else {
            NotificationManager.success('Аккаунт создан');

            this.props.history.push('/signin');
        }
    };

    render() {
        return (
            <div className="background">
                <div className="registration background-mask">
                    <div className="container">
                        <img src={surprise} alt=""/>

                        <form className="registration_form" onSubmit={this.submitData}>
                            <h2 className="title">Регистрация</h2>


                            <div className="registration_input">
                                <img src={user} alt=""/>
                                <input type="text" id="inputLogin" placeholder="Логин"
                                       required/>
                            </div>
                            <div className="registration_input">
                                <img src={mail} alt=""/>
                                <input type="email" id="inputEmail"
                                       placeholder="E-mail" required/>
                            </div>
                            <div className="registration_input">
                                <img src={key} alt=""/>
                                <input type="password" placeholder="Пароль"
                                       id="inputPassword" required/>
                            </div>
                           

                            <div className="registration_input wr-button wr-button__white">
                                <button className="button" type="submit">Зарегистрироваться</button>

                            </div>

                            <div className="registration_login">
                                Уже есть аккаунт?
                                <Link to="/"> Войти</Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        userSignup: bindActionCreators(userSignup, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
