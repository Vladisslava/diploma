import React from 'react';
/*import {Link} from 'react-router-dom';
import Menu from "./../components/Menu.jsx";
import img from '../img/img.png';
import menu from '../img/menu.png';
import surprise from '../img/surprise.png';*/
import Header from "./../components/Header.jsx";
import {connect} from "react-redux";
import {createBox} from '../store/actions/box.actions';
import {bindActionCreators} from 'redux';


class BoxCreate extends React.Component {
    onCreateBox = async (event) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            dateEnd: Date.parse(event.target.date.value),
            isPrivate: false,
            password: null,
            users: [],
            description: '',
            authorId: this.props.userId
        };

        console.log(data);
        
        this.props.createBox(data);
    };

    render() {
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
                                    <input type="checkbox" name="check"/>
                                    <div className="checkbox__text">Закрытая коробка</div>
                                </label>
                                <div className="profile_closebox">
                                    <label className="profile_input">
                                        <span>Пароль</span>
                                        <input type="password" name="password" placeholder="password"/>
                                    </label>
                                    <label className="profile_input">
                                        <span>Повторите пароль</span>
                                        <input type="password" name="password" placeholder="repeat password"/>
                                    </label>
                                </div>
                                <div className="profile_input wr-button">
                                    <input type="submit" name="submit" value="Сохранить" className="button"/>
                                </div>
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
        userId: state.user.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createBox: bindActionCreators(createBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCreate);
