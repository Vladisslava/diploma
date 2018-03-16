import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import Menu from "./../components/Menu.jsx";
import HeaderBox from "./../components/HeaderBox.jsx";
import key from '../img/key.png';


class BoxPass extends React.Component {
    render() {
        return (
            <div>
                <HeaderBox/>
                <div className="container">
                    <div className="wr-box">
                        <div className="wr-box__description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illum, voluptatibus,
                                suscipit libero numquam neque aut dolorum debitis vero impedit voluptatum nihil,
                                delectus sed ullam qui optio excepturi magni laboriosam, dignissimos facilis eaque est a
                                unde!
                            </p>
                        </div>
                        <div className="wr-box__input registration_input">
                            <img src={key} alt=""/>
                            <input type="password" placeholder="Пароль" name="password"/>
                        </div>
                        <div className="registration_input wr-button">
                            <Link to="/home/box">
                                <input type="submit" name="submit" value="Вступить" className="button"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BoxPass;
