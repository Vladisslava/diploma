import React, {Component, useState} from 'react';
import {connect} from 'react-redux';

import {generateForgotCode, restorePassword} from 'store/actions/auth.actions';

const mapDispatchToProps = {
    generateForgotCode,
    restorePassword
};

export const ForgotPassword = connect(null, mapDispatchToProps)(
    class extends Component {
        state = {
            email: '',
            send: false,
            error: false
        };

        handleInput = event => this.setState({
            email: event.target.value
        });

        handleGenerateCode = async () => {
            const res = await this.props.generateForgotCode(this.state.email);

            this.setState({
                send: true
            });
        };

        handleRestore = async ({code, password}) => {
            const res = await this.props.restorePassword(this.state.email, code, password);

            if (res.status !== 200) {
                this.setState({
                    error: true,
                });
            } else {
                this.props.history.push('/signin')
            }
        };

        render() {
            const {email, send, error} = this.state;

            if (error)
                return <Error
                    onRetry={() => this.setState({error: false})}
                    onClear={() => this.setState({email: '', send: false, error: false})}
                />;

            if (send)
                return (
                    <RestorePassword onRestore={this.handleRestore}/>
                );

            return (
                <EmailInput
                    email={email}
                    handleInputEmail={this.handleInput}
                    handleRestore={this.handleGenerateCode}
                />
            );
        }
    }
);

const RestorePassword = ({onRestore}) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleInput = setValue => event => setValue(event.target.value);

    return (
        <div>
            <input
                type="text"
                value={code}
                onChange={handleInput(setCode)}
                placeholder="Введите код"
            />
            <input
                type="password"
                value={password}
                onChange={handleInput(setPassword)}
                placeholder="Пароль"
            />
            <input
                type="password"
                value={repeatPassword}
                onChange={handleInput(setRepeatPassword)}
                placeholder="Повторите пароль"
            />
            <button onClick={() => onRestore({code, password, repeatPassword})}>Восстановить</button>
        </div>
    )
};

const EmailInput = ({email, handleInputEmail, handleRestore}) => (
    <div>
        <h3>Забыли пароль?</h3>
        <input
            type="email"
            value={email}
            onChange={handleInputEmail}
            placeholder="Введите свой эмейл"
        />
        <button onClick={handleRestore}>Восстановить</button>
    </div>
);

const Error = ({onClear, onRetry}) => (
    <>
        <div>Вы ввели не верный код</div>
        <button onClick={onRetry}>Ввести еще раз код</button>
        <button onClick={onClear}>Ввести почту</button>
    </>
);