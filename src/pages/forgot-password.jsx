import React, {Component, useState} from 'react';
import {connect} from 'react-redux';

import {generateForgotCode, restorePassword} from 'store/actions/auth.actions';
import surprise from "../assets/img/surprise.png";
import mail from "../assets/img/mail.png";
import key from "../assets/img/key.png";
import {Link} from "react-router-dom";

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
        <div className="background">
            <div className="registration background-mask">
                <div className="container">
                    <img src={surprise} alt=""/>

                    <form className="registration_form" onSubmit={this.signIn}>
                        <h2 className="title">Новый пароль</h2>
                        <div className="registration_input">
                            <input
                                type="text"
                                value={code}
                                onChange={handleInput(setCode)}
                                placeholder="Введите код"
                            />
                        </div>
                        <div className="registration_input">
                            <img src={key} alt=""/>
                            <input
                                type="password"
                                value={password}
                                onChange={handleInput(setPassword)}
                                placeholder="Пароль"
                            />
                        </div>
                        <div className="registration_input">
                            <img src={key} alt=""/>
                            <input
                                type="password"
                                value={repeatPassword}
                                onChange={handleInput(setRepeatPassword)}
                                placeholder="Повторите пароль"
                            />
                        </div>
                        <div className="registration_input registration_pass">
                            <Link to="/forgot-password">Забыли пароль?</Link>
                        </div>

                        <div className="registration_input wr-button wr-button__white">
                            <button className="button" onClick={() => onRestore({code, password, repeatPassword})}>Восстановить</button>
                        </div>

                        <div className="registration_login">
                            Ещё не зарегистрированы?
                            <Link to="/signup"> Cоздать аккаунт</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

const EmailInput = ({email, handleInputEmail, handleRestore}) => (
    <div className="background">
        <div className="registration background-mask">
            <div className="container">
                <img src={surprise} alt=""/>

                <form className="registration_form" onSubmit={e => e.preventDefault()}>
                    <h2 className="title">Восстановить парль</h2>
                    <div className="registration_input">
                        <img src={mail} alt=""/>
                        <input
                            type="email"
                            value={email}
                            onChange={handleInputEmail}
                            placeholder="Введите свой эмейл"
                        />
                    </div>
                    <div className="registration_input registration_pass">
                        <Link to="/forgot-password">Забыли пароль?</Link>
                    </div>

                    <div className="registration_input wr-button wr-button__white">
                        <button className="button" onClick={handleRestore}>Восстановить</button>
                    </div>

                    <div className="registration_login">
                        Ещё не зарегистрированы?
                        <Link to="/signup"> Cоздать аккаунт</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

const Error = ({onClear, onRetry}) => (
    <>
        <div>Вы ввели не верный код</div>
        <button onClick={onRetry}>Ввести еще раз код</button>
        <button onClick={onClear}>Ввести почту</button>
    </>
);
