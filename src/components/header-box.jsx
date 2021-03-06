import React from 'react';
import '../index.css';
import Header from "./header.jsx";
import {formatDate} from '../libs/helpers';

class HeaderBox extends React.Component {
    render() {
        return (
            <div className="wr-header_profile">
                <div className="header_profile">
                    <Header title={this.props.title}/>
                    <div className="box-desc">
                        <div className="box-desc__item">
                            <span>Количество участников:</span>
                            <span className="box-desc__num">{this.props.count}</span>
                        </div>
                        <div className="box-desc__item">
                            <span>Дата распределения:</span>
                            <span className="box-desc__num">{formatDate(this.props.time)}</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderBox;