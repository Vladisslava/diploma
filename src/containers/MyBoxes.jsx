import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import Menu from "./../components/Menu.jsx";
import menu from '../img/menu.png';
import surprise from '../img/surprise.png';
import search from '../img/search.png';
import like from '../img/like.png';
import likee from '../img/likee.png';
import Header from "./../components/Header.jsx";

class MyBoxes extends React.Component {
    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Мои коробки"/>
                        <form className="wr-search" action="">
                            <input type="text" placeholder="Поиск..."/>
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                        <div className="container">
                            <div className="wr-boxes">
                                <Link className="boxes-item" to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                    <p className="boxes-item__col">30 участников</p>
                                    <img src={likee} alt=""/>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                </Link>
                                <Link className="boxes-item" to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                    <p className="boxes-item__col">30 участников</p>
                                    <img src={likee} alt=""/>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                </Link>
                                <Link className="boxes-item" to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                    <p className="boxes-item__col">30 участников</p>
                                    <img src={likee} alt=""/>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                </Link>
                                <Link className="boxes-item" to="/boxpass">
                                    <h3 className="boxes-item__name">Коробка</h3>
                                    <p className="boxes-item__col">30 участников</p>
                                    <img src={likee} alt=""/>
                                    <p className="boxes-item__date">до 20.12.18</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyBoxes;
