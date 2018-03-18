import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import HeaderBox from "./../components/HeaderBox.jsx";
import surprise from './../img/surprise.png';
import {bindActionCreators} from "redux";
import {downloadBox, leaveBox} from "../store/actions/box.actions";
import {connect} from "react-redux";

class Box extends React.Component {
    componentDidMount() {
        if (!this.props.box || (this.props.box.isPrivate && this.props.box.password === '')) {
            this.props.history.push('/home');
        }
    }

    onLeaveBox = async () => {

    };

    render() {
        if (!this.props.box) {
            return (
                <div/>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="wr-box">
                        <HeaderBox time={this.props.box.dateEnd}
                                   count={this.props.box.users.length}
                                   title={this.props.box.name}/>
                        <div className="wr-box__description">
                            <p>{this.props.box.description}</p>
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

function mapStateToProps(state) {
    return {
        userId: state.auth.userId,
        box: state.box.box,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        leaveBox: bindActionCreators(leaveBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
