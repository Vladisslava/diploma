import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Button} from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';
import {updateBox, deleteBox} from 'store/actions/box.actions';

import Header from "components/header.jsx";


class BoxEdit extends React.Component {
    constructor(props) {
        super(props);

        if (props.box) {
            this.state = {
                box: {
                    password: props.box.password,
                    isPrivate: props.box.isPrivate,
                    name: props.box.name,
                    description: props.box.description,
                    dateEnd: props.box.dateEnd.split('T')[0],
                    dateDistribution: props.box.dateDistribution.split('T')[0],
                }
            };
        } else {
            this.state = {
                box: {}
            };
        }
    }

    onEditBox = async () => {
        try {
            await this.props.updateBox({
                id: this.props.match.params.id,
                data: this.state.box,
            });
        } catch (e) {
            return NotificationManager.error(e.response.data.msg);
        }

        NotificationManager.success('Успешно');
        this.props.history.push('/home/box/' + this.props.match.params.id);
    };

    handleDeleteBox = async() => {
        await this.props.deleteBox(this.props.match.params.id);

        NotificationManager.success('Коробка удалена');
        this.props.history.push('/home');
    };

    handleInputChange = name => e => {
        this.setState({
            box: {
                ...this.state.box,
                [name]: e.target.value,
            }
        });
    };

    render() {
        const {name, dateEnd, dateDistribution, description} = this.state.box;

        return (
            <div>
                <div className="wr-header_profile">
                    <div className="header_profile">
                        <Header title="Создать коробку"/>
                    </div>
                </div>
                <div className="container">
                    <div id="create-box-form">
                        <label className="profile_input">
                            <span>Название</span>
                            <input value={name} onChange={this.handleInputChange('name')} type="text" name="name"/>
                        </label>
                        <label className="profile_input">
                            <span>Описание</span>
                            <input value={description} onChange={this.handleInputChange('description')} type="text" name="description"/>
                        </label>
                        <label className="profile_input">
                            <span>Дата события</span>
                            <input value={dateEnd} onChange={this.handleInputChange('dateEnd')} type="date" name="date" placeholder="date"/>
                        </label>
                        <label className="profile_input">
                            <span>Дата распределения</span>
                            <input value={dateDistribution} onChange={this.handleInputChange('dateDistribution')} type="date" name="dateDistribution" placeholder="date"/>
                        </label>
                        <Button className='profile_input wr-button' onClick={this.onEditBox}>Сохранить</Button>
                        <Button className='profile_input wr-button' onClick={this.handleDeleteBox}>Удалить</Button>
                    </div>
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
        deleteBox: bindActionCreators(deleteBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxEdit);
