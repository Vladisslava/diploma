import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import HeaderBox from "./../components/HeaderBox.jsx";
import surprise from './../img/surprise.png';

class Box extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="wr-box">
                        <HeaderBox/>
                        <div className="wr-box__description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illum, voluptatibus,
                                suscipit libero numquam neque aut dolorum debitis vero impedit voluptatum nihil,
                                delectus sed ullam qui optio excepturi magni laboriosam, dignissimos facilis eaque est a
                                unde!
                            </p>
                        </div>
                        <h2 className="title title__blue">Получить подопечного</h2>

                        <Link to="/home/boxperson">
                            <img src={surprise} alt=""/>
                        </Link>
                        <div className="wr-button wr-button__min">
                            <Link to="/home/boxpass">
                                <input type="submit" name="submit" value="Покинуть коробку" className="button"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


export default Box;
