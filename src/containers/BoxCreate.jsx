import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Menu from "./../components/Menu.jsx";
import img from '../img/img.png';
import menu from '../img/menu.png';
import surprise from '../img/surprise.png';
import Header from "./../components/Header.jsx";

class BoxCreate extends React.Component {
    render() {
      return (
           <div>
                <Menu/>
                
            <div className="wr-header_profile">
                        <div className="header_profile">
                           <Header title=""/>
                       
                            <div className="box-desc">
                               <div className="box-desc__name">
                                    <h3>Создание корбки</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                <div className="container">
                    <div className="wr-box">
                        <div className="profile">
                            <form id="f" action="">
                                
                                <label className="profile_input">
                                   <span>Название</span>
                                    <input type="text" name="name" placeholder="name"/>
                                </label>
                              
                                <label className="profile_input">
                                   <span>Дата</span>
                                    <input type="date" name="date" placeholder="date"/>
                                 </label>
                                 
                                 <label className="checkbox profile_input">
                                      <input type="checkbox" id="check"/>
                                       <div className="checkbox__text">Закрытая коробка</div>
                                </label>
                                <div class="profile_closebox">
                                    <label className="profile_input">
                                       <span>Пароль</span>
                                        <input type="password" name="password" placeholder="password"/>
                                    </label>
                                    <label className="profile_input">
                                       <span>Повторите пароль</span>
                                        <input type="password" name="password" placeholder="repeat password"/>
                                     </label>
                                </div>
                                
                                <div class="profile_input wr-button">
                                    <input type="submit" name="submit" value="Сохранить" class="button"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </div>

      )
    }
}


export default BoxCreate;
