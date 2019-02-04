import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import search from 'assets/img/search.png';
import Header from "components/header.jsx";
import {favoriteBox} from "store/actions/user.actions";
import {apiConstants} from 'constants/api.constants';
import BoxItem from "components/box-item";

class Favourite extends React.Component {
    state = {
        boxes: []
    };

    async componentDidMount() {
        if (!this.props.favoriteBoxes) {
            return;
        }

        const requests = this.props.favoriteBoxes.map(item => {
            return axios.get(apiConstants.baseUrl + apiConstants.box + '/' + item)
        });

        const res = await axios.all(requests);

        console.log(res);

        this.setState({boxes: res.map(item => item.data.box)})
    }

    onFavorite = (event) => {
        this.props.favoriteBox({
            userId: this.props.userId,
            boxId: event.target.dataset.id
        });
    };

    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Избранные"/>
                        <form className="wr-search" action="">
                            <input type="text" placeholder="Поиск..."/>
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                        <div className="container">
                            <div className="wr-boxes">
                                {this.state.boxes.map(item => {
                                    return <BoxItem
                                        isFavorite={this.props.favoriteBoxes.includes(item._id)}
                                        onFavorite={() => this.onFavorite({
                                            userId: this.props.userId,
                                            boxId: item._id
                                        })}
                                        key={item._id}
                                        box={item}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
        favoriteBoxes: state.user.favoritesBox
    }
}

function mapDispatchToProps(dispatch) {
    return {
        favoriteBox: bindActionCreators(favoriteBox, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);