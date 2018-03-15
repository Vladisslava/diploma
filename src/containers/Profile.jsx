import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Menu from "./../components/Menu.jsx";
import img from '../img/img.png';
import menu from '../img/menu.png';
import upload from '../img/upload.png';
import surprise from '../img/surprise.png';
import Header from "./../components/Header.jsx";


class Profile extends React.Component {
    render() {
      return (
           <div>
                <div className="wr-header_profile">
                    <div className="header_profile">

                    <Header title="Profile"/>
                    
                    <div className="profile__photo">
                       <div class="profile__img">
                           <img src={img} alt=""/>
                           <div class="profile__img-mask">
                                <img src={upload} alt=""/>
                           </div>
                           
                       </div>
                        
                    </div>
                  </div>  
                </div>

               <div className="profile">
                    <form action="">
                        <div className="profile_input">
                           <span>Логин</span>
                            <input type="text" name="login" placeholder="login"/>
                        </div>
                         <div className="profile_input">
                             <span>E-mail</span>
                             <input type="email" name="email" placeholder="e-mail"/>
                        </div>
                        <div className="profile_input">
                           <span>Пароль</span>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <div className="profile_input">
                           <span>Имя</span>
                            <input type="text" name="name" placeholder="name"/>
                        </div>
                        <div className="profile_input">
                           <span>Фамилия</span>
                            <input type="text" name="surname" placeholder="surname"/>
                        </div>
                         <div className="profile_input">
                           <span>Пол</span>
                            <input type="text" name="sex" placeholder="sex"/>
                        </div>
                         <div className="profile_input">
                           <span>Год рождения</span>
                            <input type="text" name="year" placeholder="year"/>
                        </div>
                        <div className="profile_input">
                           <span>Номер телефона</span>
                            <input type="text" name="number" placeholder="number"/>
                        </div>
                         <div className="profile_input">
                           <span>Страна</span>
                            <input type="text" name="country" placeholder="country"/>
                        </div>
                         <div className="profile_input">
                           <span>Город</span>
                            <input type="text" name="city" placeholder="city"/>
                        </div>
                         <div className="profile_input">
                           <span>Адрес</span>
                            <input type="text" name="adress" placeholder="adress"/>
                        </div>
                         <div className="profile_input">
                           <span>Почтовый индекс</span>
                            <input type="text" name="index" placeholder="index"/>
                        </div>

                        <div className="profile_input wr-button">
                             <input type="submit" name="submit" value="Сохранить" className="button"/>
                        </div> 
                    </form>
                </div>
          </div>

      )
    }
}


export default Profile;
