import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import HeaderBox from "./../components/HeaderBox.jsx";
import key from '../img/key.png';
import {downloadBox} from "../store/actions/box.actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class BoxPass extends React.Component {
    componentDidMount() {
        this.props.downloadBox(this.props.match.params.id);
    }

    render() {
        if (this.props.box === undefined) {
            return (
                <div>Загрузка</div>
            )
        }

        return (
            <div>
                <HeaderBox time={this.props.box.dateEnd} count={this.props.box.users.length} title={this.props.box.name}/>
                <div className="container">
                    <div className="wr-box">
                        <div className="wr-box__description">
                            <p>{this.props.box.description}</p>
                        </div>
                        <div className="wr-box__input registration_input">
                            <img src={key} alt=""/>
                            <input type="password" placeholder="Пароль" name="password"/>
                        </div>
                        <div className="registration_input wr-button">
                            <Link to="/home/box">
                                <input type="submit" name="submit" value="Вступить" className="button"/>
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
        box: state.box.box,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        downloadBox: bindActionCreators(downloadBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxPass);
