import React from 'react';
import {connect} from 'react-redux';
import {getWard, downloadBox} from 'store/actions/box.actions';

import HeaderBox from "components/header-box.jsx";
import img from 'assets/img/img.png';

const mapStateToProps = state => ({
    ward: state.box.ward,
    box: state.box.box
});

const mapDispatchToProps = {
    getWard,
    downloadBox
};

class BoxPerson extends React.Component {
    componentDidMount() {
        this.props.getWard(this.props.match.params.boxId);
        this.props.downloadBox(this.props.match.params.boxId);
    }

    render() {
        const ward = this.props.ward.user;
        const box = this.props.box;

        return (
            <div>
                <HeaderBox count={box && box.users.length} time={box && box.dateDistribution}/>
                <div className="container">
                    <div className="wr-box">
                        <p className="wr-box__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illum, voluptatibus,
                            suscipit libero numquam neque aut dolorum debitis vero impedit voluptatum nihil,
                            delectus sed ullam qui optio excepturi magni laboriosam, dignissimos facilis eaque est a
                            unde!
                        </p>
                        <h2 className="title title__blue">Твой подопечный</h2>
                        <div className="profile">
                            <form action="">
                                <img src={img} alt=""/>
                                {ward ? claims.map(item => (
                                    <ProfileClaim key={item.title} label={item.title}>{ward[item.key]}</ProfileClaim>
                                )) : <div>Звгрузка</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const claims = [
    {title: 'Имя', key: 'firstName'},
    {title: 'Фамилия', key: 'lastName'},
    {title: 'Пол', key: 'gender'},
    {title: 'Год рождения', key: 'yearOfBirth'},
    {title: 'Номер телефона', key: 'phone'},
    {title: 'Страна', key: 'country'},
    {title: 'Город', key: 'city'},
    {title: 'Адрес', key: 'address'},
    {title: 'Почтовый индекс', key: 'postcode'},
];

const ProfileClaim = ({label, children}) => (
    <div className="profile_input">
        <span>{label}</span>
        <div>{children}</div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(BoxPerson);
