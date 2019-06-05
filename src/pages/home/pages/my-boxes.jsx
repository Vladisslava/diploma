import React from 'react';
import {connect} from "react-redux";
import axios from 'axios';

import search from 'assets/img/search.png';
import Header from "components/header.jsx";
import {apiConstants} from 'constants/api.constants';
import {Pagination} from "react-bootstrap";
import BoxItem from "components/box-item";
import {bindActionCreators} from "redux";
import {favoriteBox} from "store/actions/user.actions";

class MyBoxes extends React.Component {
    state = {
        page: 1,
        pages: 1,
        total: 0,
        searchQuery: '',
        boxes: [],
    };

    getUrl() {
        return `${apiConstants.baseUrl}${apiConstants.box}/user/${this.props.userId}/search?page=${[this.state.page]}&query=${this.state.searchQuery}`
    }

    async downloadFavoriteBoxes() {
        const boxes = await axios.get(this.getUrl());

        const {docs, page = 1, pages, total} = boxes.data;

        this.setState({boxes: docs, page: +page, pages, total});
    }

    async componentDidMount() {
        await this.downloadFavoriteBoxes();
    }

    onPaginationClick = async (event) => {
        event.preventDefault();

        await this.downloadFavoriteBoxes(+event.target.getAttribute('href'));
    };

    handleSearch = e => {
        e.preventDefault();

        this.downloadFavoriteBoxes();
    };

    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Мои коробки"/>
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
                            {this.props.total !== 0 && (
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBoxes);
