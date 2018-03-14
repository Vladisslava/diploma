import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignin, userSignup} from '../store/actions/user.actions';
import '../index.css';
import surprise from '../img/surprise.png';
import user from '../img/user.png';
import mail from '../img/mail.png';
import key from '../img/key.png';


class SignUp extends React.Component{
 constructor(props) {
        super();
    }

    submitData = async (event) => {
        event.preventDefault();
        
        
        console.log(await this.props.userSignup({
            username: event.target.inputLogin.value,
            password: event.target.inputPassword,
            email: event.target.inputEmail,
        }))
        //this.props.history.push('/home');
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
                        <input type="text" onChange={this.handleNameChange} id="inputLogin" placeholder="Логин" required />
                    </div>
                    <div className="registration_input">
                       <img src={mail} alt=""/>
                        <input type="email" onChange={this.handleEmailChange} id="inputEmail" placeholder="E-mail" required />
                    </div>
                   <div className="registration_input">
                       <img src={key} alt=""/>
                        <input type="password" placeholder="Пароль" onChange={this.handlePasswordChange} id="inputPassword" required/>
                    </div>
                    <div className="registration_input registration_pass">
                       <a href="">Забыли пароль?</a>
                    </div>
                
                    <div className="registration_input wr-button wr-button__white">
                        <button className="button" type="submit" >Зарегистрироваться</button>
                       
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
        userSignin: bindActionCreators(userSignin, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
