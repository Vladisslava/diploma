import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Menu from "./../components/Menu.jsx";
import menu from '../img/menu.png';
import surprise from '../img/surprise.png';
import search from '../img/search.png';
import like from '../img/like.png';
import likee from '../img/likee.png';
import Header from "./../components/Header.jsx";

class Home extends React.Component{
  render() {
      return (
            <div>
                <Menu/>
          
                <div className="background">
                    <div className="background-mask">
                     
                        <Header title="Surprise"/>
                        <form className="wr-search" action="">
                           <input type="text" placeholder="Поиск..."/>
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                         
                        <div className="container">
                            <div className="wr-boxes">
                              
                                <Link className="boxes-item__plus" to="/boxcreate">
                                   +
                                 </Link>
                             
                                
                                <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Весь мир</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                    <div className="boxes-item__img">
                                        <img className="boxes-item__dislike active" src={likee} alt=""/>
                                         <img className="boxes-item__like" src={like} alt=""/>
                                    </div>
                                    
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                 <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                   <div className="boxes-item__img">
                                        <img className="boxes-item__dislike active" src={likee} alt=""/>
                                         <img className="boxes-item__like" src={like} alt=""/>
                                    </div>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                
                                  <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                    <div className="boxes-item__img">
                                        <img className="boxes-item__dislike active" src={likee} alt=""/>
                                         <img className="boxes-item__like" src={like} alt=""/>
                                    </div>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                  <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                   <div className="boxes-item__img">
                                        <img className="boxes-item__dislike" src={likee} alt=""/>
                                         <img className="boxes-item__like active" src={like} alt=""/>
                                    </div>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                  <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                    <div className="boxes-item__img">
                                        <img className="boxes-item__dislike" src={likee} alt=""/>
                                         <img className="boxes-item__like active" src={like} alt=""/>
                                    </div>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                  <div className="boxes-item">
                                   <Link to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                     </Link>
                                    <p className="boxes-item__col">30 участников</p>
                                    <div className="boxes-item__img">
                                        <img className="boxes-item__dislike active" src={likee} alt=""/>
                                         <img className="boxes-item__like" src={like} alt=""/>
                                    </div>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                 </div>
                                 
                           </div>
                        </div>
                    </div>
                </div>
            </div>
         
                        
                    
        
      )
  }
}



export default Home;
