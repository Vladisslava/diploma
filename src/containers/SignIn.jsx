import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignin} from '../store/actions/user.actions';

import '../index.css';
import surprise from '../img/surprise.png';
import mail from '../img/mail.png';
import key from '../img/key.png';
import {NotificationManager} from 'react-notifications';


class Signin extends Component {
    login = async (login, password) => {
        const isLogin = await this.props.userSignin({username: login, password});

        if (isLogin) {
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
                  
                <form className="registration_form" onSubmit={this.login}>
                    <h2 className="title">Авторизация</h2>
                    
                    <div className="registration_input">
                       <img src={mail} alt=""/>
                        <input type="text" onChange={this.handleEmailChange} id="inputEmail" placeholder="Логин" required />
                    </div>
                   <div className="registration_input">
                       <img src={key} alt=""/>
                        <input type="password" placeholder="Пароль" onChange={this.handlePasswordChange} id="inputPassword" required/>
                    </div>
                    <div className="registration_input registration_pass">
                       <a href="">Забыли пароль?</a>
                    </div>
                
                    <div className="registration_input wr-button wr-button__white">
                          <Link to="/home"> 
                             <button className="button" onClick={this.signIn} type="button">Войти</button>
                        </Link>
                        
                        <button className="button" onClick={this.signIn} type="button">Войти</button>
                    </div> 
                    <input type="submit" name="submit" value="Войти"/>
                    
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




function mapDispatchToProps(dispatch) {
    return {
        userSignin: bindActionCreators(userSignin, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Signin));
