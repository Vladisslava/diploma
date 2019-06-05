import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Button, FormControl,} from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';

import Header from "components/header.jsx";
import {createBox} from 'store/actions/box.actions';


class BoxCreate extends React.Component {
    state = {
        isPrivate: false
    };

    onCreateBox = async (event) => {
        event.preventDefault();
        //TODO Добавить проверку пароля

        const password = event.target.password !== undefined ? event.target.password.value : '';

        const data = {
            name: event.target.name.value,
            dateEnd: Date.parse(event.target.date.value),
            dateDistribution: Date.parse(event.target.dateDistribution.value),
            isPrivate: this.state.isPrivate,
            password: password,
            users: [{user: this.props.userId, ward: null}],
            description: '',
            creator: this.props.username
        };

        if (!data.dateEnd || !data.dateDistribution) {
            return NotificationManager.error('Заполните все поля');
        }

        try {
            console.log(data);
            await this.props.createBox(data);
        } catch (e) {
            return NotificationManager.error('Ошибка, попробуйте еще раз');
        }

        NotificationManager.success('Коробка создана');
        this.props.history.push('/home');
    };

    onChangeIsPrivate = () => {
        this.setState({isPrivate: !this.state.isPrivate});
    };

    render() {
        return (
            <div>
                <div className="wr-header_profile">
                    <div className="header_profile">
                        <Header title="Создать коробку"/>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={this.onCreateBox} id="create-box-form" action="">
                        <label className="profile_input">
                            <span>Название</span>
                            <input type="text" name="name" placeholder="name"/>
                        </label>
                        <label className="profile_input">
                            <span>Дата события</span>
                            <input type="date" name="date" placeholder="date"/>
                        </label>
                        <label className="profile_input">
                            <span>Дата распределения</span>
                            <input type="date" name="dateDistribution" placeholder="date"/>
                        </label>
                        <label className="checkbox profile_input">
                            <FormControl value={this.state.isPrivate} onChange={this.onChangeIsPrivate}
                                         type='checkbox'/>
                            <div className="checkbox__text">Закрытая коробка</div>
                        </label>
                        {
                            this.state.isPrivate && (
                                <div>
                                    <label className="profile_input">
                                        <span>Пароль</span>
                                        <input type="password" name="password" placeholder="password"/>
                                    </label>
                                    <label className="profile_input">
                                        <span>Повторите пароль</span>
                                        <input type="password" name="repeat-password" placeholder="repeat password"/>
                                    </label>
                                </div>
                            )
                        }
                        <Button className='profile_input wr-button' type='submit'>Сохранить</Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
        username: state.user.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createBox: bindActionCreators(createBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCreate);
