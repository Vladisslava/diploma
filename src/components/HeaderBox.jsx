import React from 'react';
import '../index.css';
import Header from "./Header.jsx";

class HeaderBox extends React.Component {
    render() {
        return (
            <div className="wr-header_profile">
                <div className="header_profile">
                    <Header title=""/>
                    <div className="box-desc">
                        <div className="box-desc__name">
                            <h3>New Year</h3>
                        </div>
                        <div className="box-desc__item">
                            <span>Количество участников:</span>
                            <span className="box-desc__num">30</span>
                        </div>
                        <div className="box-desc__item">
                            <span>Дата распределения:</span>
                            <span className="box-desc__num">15.12.2018</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderBox;