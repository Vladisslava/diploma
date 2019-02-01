import React from 'react';
import HeaderBox from "../components/header-box.jsx";
import img from '../assets/img/img.png';


class BoxPerson extends React.Component {
    render() {
      return (
           <div>
                <HeaderBox/>

                <div className="container">
                    <div className="wr-box">
                        <div className="wr-box__description">
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illum, voluptatibus, suscipit libero numquam neque aut dolorum debitis vero impedit voluptatum nihil, delectus sed ullam qui optio excepturi magni laboriosam, dignissimos facilis eaque est a unde!
                          </p>
                      </div>
                        <h2 className="title title__blue">Твой подопечный</h2>
                        <div className="profile">
                            <form action="">
                                <img src={img} alt=""/>
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
                            </form>
                        </div>
                    </div>
                </div>
           </div>

      )
    }
}


export default BoxPerson;
