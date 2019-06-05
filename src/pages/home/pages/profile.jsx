import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import 'index.css';
import img from 'assets/img/img.png';
import upload from 'assets/img/upload.png';
import Header from "components/header.jsx";
import {updateUser} from 'store/actions/user.actions';
import {NotificationManager} from 'react-notifications';

class Profile extends React.Component {
    onSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: event.target.login.value,
            email: event.target.email.value,
            firstName: event.target.name.value,
            lastName: event.target.surname.value,
            gender: event.target.sex.value,
            yearOfBirth: event.target.year.value,
            phone: event.target.phone.value,
            country: event.target.country.value,
            city: event.target.city.value,
            address: event.target.address.value,
            postcode: event.target.index.value,
            password: event.target.password.value
        };

        const req = {};

        for (let key in data) {
            if (data[key] !== '') {
                req[key] = data[key]
            }
        }

        await this.props.updateUser(this.props.userId, req);

        NotificationManager.success('Профиль обновлен');
    };

    render() {
        let {username, email, firstName, lastName, gender, yearOfBirth, phone, country, city, address, postcode} = this.props.user;

        return (
            <div>
                <div className="wr-header_profile">
                    <div className="header_profile">
                        <Header title="Profile"/>
                        <div className="profile__photo">
                            <div className="profile__img">
                                <img src={img} alt=""/>
                                <div className="profile__img-mask">
                                    <img src={upload} alt=""/>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="profile">
                    <form onSubmit={this.onSubmit}>
                        <div className="profile_input">
                            <span>Логин</span>
                            <input defaultValue={username} type="text" name="login" placeholder="login"/>
                        </div>
                        <div className="profile_input">
                            <span>E-mail</span>
                            <input defaultValue={email} type="email" name="email" placeholder="e-mail"/>
                        </div>
                        <div className="profile_input">
                            <span>Пароль</span>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <div className="profile_input">
                            <span>Имя</span>
                            <input defaultValue={firstName} type="text" name="name" placeholder="name"/>
                        </div>
                        <div className="profile_input">
                            <span>Фамилия</span>
                            <input defaultValue={lastName} type="text" name="surname" placeholder="surname"/>
                        </div>
                        <div className="profile_input">
                            <span>Пол</span>
                            <select defaultValue={gender} name="sex" size="1">
                                <option disabled selected>Укажите пол:</option>
                                <option value="man">Мужской</option>
                                <option value="second">Женский</option>
                            </select>
                        </div>
                        <div className="profile_input">
                            <span>Дата рождения</span>
                            <input defaultValue={yearOfBirth !== 0 ? yearOfBirth : ''} type="date" name="year" placeholder="year"/>
                        </div>
                        <div className="profile_input">
                            <span>Номер телефона</span>
                            <input defaultValue={phone} type="tel" name="phone" placeholder="phone"/>
                        </div>
                        <div className="profile_input">
                            <span>Страна</span>
                            <input defaultValue={country} type="text" name="country" placeholder="country"/>
                        </div>
                        <div className="profile_input">
                            <span>Город</span>
                            <input defaultValue={city} type="text" name="city" placeholder="city"/>
                        </div>
                        <div className="profile_input">
                            <span>Адрес</span>
                            <input defaultValue={address} type="text" name="address" placeholder="address"/>
                        </div>
                        <div className="profile_input">
                            <span>Почтовый индекс</span>
                            <input defaultValue={postcode !== 0 ? postcode : ''} type="number" name="index" placeholder="index"/>
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

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser: bindActionCreators(updateUser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
