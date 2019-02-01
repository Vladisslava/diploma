import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NotificationManager} from "react-notifications";
import {withRouter} from "react-router-dom";

import HeaderBox from "components/header-box.jsx";
import key from 'assets/img/key.png';
import {downloadBox, joinTheBox, setBoxPassword, isJoinedToBox} from "store/actions/box.actions";


class BoxAuth extends React.Component {
    async componentDidMount() {
        if (!this.props.box || this.props.box._id !== this.props.match.params.id) {
            await this.props.downloadBox(this.props.match.params.id);
        }

        const isJoined = await this.props.isJoinedToBox({userId: this.props.userId, boxId: this.props.box._id});

        if (isJoined) {
            this.props.history.push('/home/box');
        }
    }

    onJoin = async (event) => {
        event.preventDefault();

        let password = '';

        if (this.props.box.isPrivate) {
            password = event.target.password.value
        }

        const data = {
            userId: this.props.userId,
            boxId: this.props.box._id,
            password
        };

        const res = await this.props.joinTheBox(data);

        if (res.data.isJoin) {
            this.props.setBoxPassword(password);
            this.props.history.push('/home/box');
        } else {
            NotificationManager.error(res.data.msg);
        }
    };

    render() {
        if (this.props.box === undefined) {
            return (
                <div>Загрузка</div>
            )
        }

        return (
            <div>
                <HeaderBox time={this.props.box.dateDistribution}
                           count={this.props.box.users.filter(item => item.length > 0).length}
                           title={this.props.box.name}
                />
                <div className="container">
                    <form onSubmit={this.onJoin} className="wr-box">
                        <div className="wr-box__description">
                            <p>{this.props.box.description}</p>
                        </div>
                        {this.props.box.isPrivate && (
                            <div className="wr-box__input registration_input">
                                <img src={key} alt=""/>
                                <input type="password" placeholder="Пароль" name="password"/>
                            </div>
                        )}
                        <div className="registration_input wr-button">
                            <input type="submit" name="submit" value="Вступить" className="button"/>
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
        box: state.box.box,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        isJoinedToBox: bindActionCreators(isJoinedToBox, dispatch),
        downloadBox: bindActionCreators(downloadBox, dispatch),
        joinTheBox: bindActionCreators(joinTheBox, dispatch),
        setBoxPassword: bindActionCreators(setBoxPassword, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BoxAuth));
