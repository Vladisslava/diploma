import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component {

    submitData = event => {
        event.preventDefault();
        this.props.history.push('/home');
    };

    render() {
        return (
            <div className="App">
                <Link to="/signin">
                    Войти
                </Link>
                <Link to="/signup">
                    Нету аккаунта? Зарегистрироваться
                </Link>
            </div>
        );
    }
}

export default App;
