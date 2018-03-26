import React from 'react';
import {Link} from 'react-router-dom';
import '../../index.css';
import search from '../../img/search.png';
import Header from "../../components/Header.jsx";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {downloadBoxesByPage} from "../../store/actions/box.actions";
import {favoriteBox} from '../../store/actions/user.actions';
import BoxItem from "./BoxItem";
import {Pagination} from 'react-bootstrap';

class Home extends React.Component {
    componentDidMount() {
        this.props.downloadBoxesByPage(1);
    }

    onPaginationClick = (event) => {
        event.preventDefault();

        this.props.downloadBoxesByPage(+event.target.getAttribute('href'));
    };

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
                        <Header title="Surprise"/>
                        <form className="wr-search" action="">
                            <input type="text" placeholder="Поиск..."/>
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                        <div className="container">
                            <div className="wr-boxes">
                                <Link className="boxes-item__plus" to="/home/boxcreate">
                                    +
                                </Link>
                                {this.props.boxes.map(item => {
                                    return <BoxItem
                                        isFavorite={this.props.favoriteBoxes.includes(item._id)}
                                        key={item._id}
                                        box={item}
                                    />
                                })}
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
        favoriteBox: bindActionCreators(favoriteBox, dispatch),
        downloadBoxesByPage: bindActionCreators(downloadBoxesByPage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
