import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import img from '../img/img.png';
import profile from '../img/profile.png';
import home from '../img/home.png';
import logout from '../img/logout.png';
import favourite from '../img/favourite.png';
import mybox from '../img/mybox.png';
import rules from '../img/rules.png';

class Menu extends React.Component{
  render() {
      return (
          <div>
               <div className="wr-menu">
                        <div className="wr-menu__header">
                            <div className="wr-menu__header-mask">
                               <img src={img} alt=""/>
                               <p className="wr-menu__name">Vladislava Minenko</p>
                               <p className="wr-menu__adress">Kanatnaya, 100/3, ap.30</p>
                            </div>
                       </div>
                    <ul className="mob-menu">
                      <li className="mob-menu__item">
                           
                          <Link to="/home">
                          <img src={home} alt=""/>Главная</Link>
                      </li>
                       <li className="mob-menu__item">
                            
                             <Link to="/profile">
                             <img src={profile} alt=""/>Профиль</Link>
                        </li>
                         <li className="mob-menu__item">
                             
                            <Link to="/myboxes">
                            <img src={mybox} alt=""/>Мои коробки</Link>
                         
                        </li>
                         <li className="mob-menu__item">
                             
                            <Link to="/favourite">
                            <img src={favourite} alt=""/>Избранные</Link>
                         
                        </li>
                         <li className="mob-menu__item">
                             
                             <Link to="/rules">
                              <img src={rules} alt=""/>Правила</Link>
                         </li>
                         <li className="mob-menu__item">
                              
                             <Link to="/signin">
                             <img src={logout} alt=""/>Выйти</Link>
                         </li>
                    </ul>  
                </div>
                <div className="wr-notmenu"></div>
          </div>
      )
  }
}



export default Menu;
