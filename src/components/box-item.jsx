import React, {Component} from 'react';
import {Link} from "react-router-dom";

import like from 'assets/img/like.png';
import emptyLike from 'assets/img/likee.png';
import {formatDate} from 'libs/helpers';

class BoxItem extends Component {
    render() {
        return (
            <div className="boxes-item">
                <Link to={'/home/box/' + this.props.box._id}>
                    <h3 className="boxes-item__name">{this.props.box.name}</h3>
                </Link>

                <div className="box-info">
                    <p className="boxes-item__col box-item__creator">{this.props.box.creator}</p>
                    <p className="boxes-item__col">{this.props.box.users.length}</p>
                </div>

                <div className="box-item__footer">
                    <div className="boxes-item__img" onClick={this.props.favoriteBox}>
                        <img
                            data-id={this.props.box._id}
                            className="boxes-item__dislike active"
                            src={this.props.isFavorite ? like : emptyLike} alt=""/>
                    </div>

                    <p className="boxes-item__date">{`до ${formatDate(this.props.box.dateEnd)}`}</p>
                </div>
            </div>
        )
    }
}

export default BoxItem;