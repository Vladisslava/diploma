import React from 'react';
import Header from "./../components/Header.jsx";
import {connect} from "react-redux";
import {createBox} from '../store/actions/box.actions';
import {bindActionCreators} from 'redux';
import {Button, FormControl, } from 'react-bootstrap';


class BoxCreate extends React.Component {
    state = {
        isPrivate: false
    };

    onCreateBox = async (event) => {
        event.preventDefault();
        //TODO Добавить проверку пароля

        const data = {
            name: event.target.name.value,
            dateEnd: Date.parse(event.target.date.value),
            isPrivate: false,
            password: event.target.password.value,
            users: [],
            description: '',
            authorId: this.props.userId
        };

        console.log(data);

        // this.props.createBox(data);
    };

    onChangeIsPrivate = () => {
        this.setState({isPrivate: !this.state.isPrivate});
    };

    render() {
        console.log(this.state.isPrivate);

        return (
            <div>
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
                            <form onSubmit={this.onCreateBox} id="create-box-form" action="">
                                <label className="profile_input">
                                    <span>Название</span>
                                    <input type="text" name="name" placeholder="name"/>
                                </label>
                                <label className="profile_input">
                                    <span>Дата</span>
                                    <input type="date" name="date" placeholder="date"/>
                                </label>
                                <label className="checkbox profile_input">
                                    <FormControl value={this.state.isPrivate} onChange={this.onChangeIsPrivate} type='checkbox'/>
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
                                                <input type="password" name="password" placeholder="repeat password"/>
                                            </label>
                                        </div>
                                    )
                                }
                                <Button className='profile_input wr-button' type='submit'>Сохранить</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createBox: bindActionCreators(createBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCreate);
