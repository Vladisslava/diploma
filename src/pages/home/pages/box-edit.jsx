import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Button, FormControl,} from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';
import {updateBox} from 'store/actions/box.actions';

import Header from "components/header.jsx";


class BoxCreate extends React.Component {
    state = {
        isPrivate: false
    };

    onCreateBox = async (event) => {
        event.preventDefault();

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
            await this.props.createBox(data);
        } catch (e) {
            return NotificationManager.error('Ошибка, попробуйте еще раз');
        }

        NotificationManager.success('Коробка создана');
        this.props.history.push('/home');
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
                        <Button className='profile_input wr-button' type='submit'>Сохранить</Button>
                        <Button className='profile_input wr-button' type='submit'>Удалить</Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
        username: state.user.username,
        box: state.box.box,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateBox: bindActionCreators(updateBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCreate);
