import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import search from 'assets/img/search.png';
import Header from "components/header.jsx";
import {favoriteBox} from "store/actions/user.actions";
import {apiConstants} from 'constants/api.constants';
import BoxItem from "components/box-item";
import {Pagination} from "react-bootstrap";

class Favourite extends React.Component {
    state = {
        page: 1,
        pages: 1,
        total: 0,
        searchQuery: '',
        boxes: [],
    };

    getUrl() {
        return `${apiConstants.baseUrl}${apiConstants.box}/favorite/${this.props.userId}?page=${this.state.page}&query=${this.state.searchQuery}`
    }

    async fetchFavouriteBoxes() {
        const res = await axios.get(this.getUrl());

        const {docs, page = 1, pages, total} = res.data;
        this.setState({boxes: docs, page: +page, pages, total});
    }

    async componentDidMount() {
        this.fetchFavouriteBoxes();
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.fetchFavouriteBoxes();
    };

    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Избранные"/>
                        <form className="wr-search" action="" onSubmit={this.handleSearch}>
                            <input
                                type="text"
                                placeholder="Поиск..."
                                onChange={e => this.setState({searchQuery: e.target.value})}
                            />
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                        <div className="container">
                            <div className="wr-boxes">
                                {this.state.boxes.map(item => {
                                    return <BoxItem
                                        isFavorite={this.props.favoriteBoxes.includes(item._id)}
                                        favoriteBox={() => this.props.favoriteBox({
                                            userId: this.props.userId,
                                            boxId: item._id
                                        })}
                                        key={item._id}
                                        box={item}
                                    />
                                })}
                            </div>
                            {this.state.total !== 0 && (
                                <Pagination bsSize="large">
                                    {[...Array(this.state.pages).keys()].map(item => {
                                        return (
                                            <Pagination.Item
                                                key={item}
                                                href={(item + 1) + ''}
                                                active={this.state.page === item + 1}
                                                onClick={this.onPaginationClick}
                                            >{item + 1}</Pagination.Item>
                                        )
                                    })}
                                </Pagination>
                            )}
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
