import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import HeaderBox from "components/header-box.jsx";
import surprise from 'assets/img/surprise.png';
import {isJoinedToBox, leaveBox} from "store/actions/box.actions";

class Box extends React.Component {
    async componentDidMount() {
        if (this.props.box) {
            const isJoined = await this.props.isJoinedToBox({userId: this.props.userId, boxId: this.props.box._id});

            !isJoined && this.props.history.push('/home');
        } else {
            this.props.history.push('/home');
        }
    }

    onLeaveBox = async () => {
        await this.props.leaveBox({userId: this.props.userId, boxId: this.props.box._id});
        this.props.history.push('/home');
    };

    render() {
        if (!this.props.box) {
            return (
                <div/>
            )
        }

        return (
            <div className="wr-box">
                <HeaderBox time={this.props.box.dateDistribution}
                           count={this.props.box.users.length}
                           title={this.props.box.name}/>
                <div className="wr-box__description">
                    <p>{this.props.box.description}</p>
                </div>
                <h2 className="title title__blue">Посмотреть подопечного</h2>

                <Link to={"/home/boxperson/" + this.props.box._id}>
                    <img src={surprise} alt=""/>
                </Link>
                <div className="wr-button wr-button__min mb-15">
                    <Link to="/home">
                        <input type="submit" onClick={this.onLeaveBox} name="submit" value="Покинуть коробку"
                               className="button"/>
                    </Link>
                </div>
                {this.props.username === this.props.box.creator && (
                    <div className="wr-button wr-button__min mt-15">
                        <Link to={`/home/box-edit/${this.props.box._id}`}>
                            <input type="submit" name="submit" value="Редактировать"
                                   className="button"/>
                        </Link>
                    </div>
                )}
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
        isJoinedToBox: bindActionCreators(isJoinedToBox, dispatch),
        leaveBox: bindActionCreators(leaveBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
