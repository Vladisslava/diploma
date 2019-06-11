import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Pagination} from 'react-bootstrap';

import {downloadBoxesByPage, searchBoxes} from "store/actions/box.actions";
import {favoriteBox, getUserInfo} from 'store/actions/user.actions';
import Header from "components/header.jsx";
import BoxItem from "components/box-item";
import {Search} from 'components/search';

class Home extends React.Component {
    state = {
        searchQuery: '',
        page: 1
    };

    componentDidMount() {
        this.props.downloadBoxesByPage(1);
        this.props.getUserInfo(this.props.userId);
    }

    onPaginationClick = (event) => {
        event.preventDefault();

        if (this.state.searchQuery.length === 0) {
            this.props.downloadBoxesByPage(+event.target.getAttribute('href'));
        } else {
            this.setState({page: +event.target.getAttribute('href')});
            this.props.searchBoxes(this.state.searchQuery, 1);
        }
    };

    handleChangeSearch = searchQuery => {
        this.setState({searchQuery});
        this.props.searchBoxes(searchQuery, 1);
    };

    handleSearch = query => {
        this.setState({page: 1});
        this.props.searchBoxes(query, 1);
    };
    
    render() {
        return (
            <div>
                <div className="background">
                    <div className="background-mask">
                        <Header title="Surprise"/>
                        <Search
                            onChange={this.handleChangeSearch}
                            onSearch={this.handleSearch}
                        />
                        <div className="container">
                            <div className="wr-boxes">
                                <Link className="boxes-item__plus" to="/home/boxcreate">+</Link>
                                {this.props.boxes.map(item => (
                                    <BoxItem
                                        key={item._id}
                                        favoriteBox={() => this.props.favoriteBox({userId: this.props.userId, boxId: item._id})}
                                        isFavorite={this.props.favoriteBoxes.includes(item._id)}
                                        box={item}
                                    />
                                ))}
                            </div>
                            {this.props.total !== 0 && (
                                <Pagination bsSize="large">
                                    {[...Array(this.props.pages).keys()].map(item => {
                                        return (
                                            <Pagination.Item
                                                key={item}
                                                href={(item + 1) + ''}
                                                active={this.props.page === item + 1}
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
        boxes: state.box.boxes,
        page: +state.box.page,
        pages: +state.box.pages,
        total: +state.box.total,
        userId: state.auth.id,
        favoriteBoxes: state.user.favoritesBox
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchBoxes: bindActionCreators(searchBoxes, dispatch),
        favoriteBox: bindActionCreators(favoriteBox, dispatch),
        downloadBoxesByPage: bindActionCreators(downloadBoxesByPage, dispatch),
        getUserInfo: bindActionCreators(getUserInfo, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
