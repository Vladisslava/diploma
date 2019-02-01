import React from 'react';
import {connect} from "react-redux";
import axios from 'axios';

import search from 'assets/img/search.png';
import Header from "components/header.jsx";
import {apiConstants} from 'constants/api.constants';
import {Pagination} from "react-bootstrap";
import BoxItem from "components/box-item";

class MyBoxes extends React.Component {
    state = {
        page: 1,
        pages: 1,
        boxes: [],
    };

    async downloadFavoriteBoxes (data) {
        const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/user/${this.props.userId}?page${[data]}`);

        const {docs, page, pages} = boxes.data.boxes;

        this.setState({boxes: docs, page, pages});
    }

    async componentDidMount() {
        await this.downloadFavoriteBoxes(1);
    }

    onPaginationClick = async (event) => {
        event.preventDefault();

        await this.downloadFavoriteBoxes(+event.target.getAttribute('href'));
    };

    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Мои коробки"/>
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



export default connect(mapStateToProps)(MyBoxes);
