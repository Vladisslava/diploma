import React, {Component} from 'react';
import {Link} from "react-router-dom";
import like from '../../img/like.png';
import emptyLike from '../../img/likee.png';
import {formatDate} from '../../libs/helpers';
import {bindActionCreators} from "redux";
import {favoriteBox} from "../../store/actions/user.actions";
import {connect} from "react-redux";

class BoxItem extends Component {
    onFavorite = (event) => {
        this.props.favoriteBox({
            userId: this.props.userId,
            boxId: event.target.dataset.id
        });
    };

    render() {
        return (
            <div className="boxes-item">
                <Link to={'/home/box/' + this.props.box._id}>
                    <h3 className="boxes-item__name">{this.props.box.name}</h3>
                </Link>
                <p className="boxes-item__col">{this.props.box.users.length + ' '}</p>
                <div className="boxes-item__img" onClick={this.onFavorite}>
                    <img
                        data-id={this.props.box._id}
                        className="boxes-item__dislike active"
                        src={this.props.isFavorite ? like : emptyLike} alt=""/>
                </div>

                <p className="boxes-item__date">{`до ${formatDate(this.props.box.dateEnd)}`}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        favoriteBox: bindActionCreators(favoriteBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxItem);