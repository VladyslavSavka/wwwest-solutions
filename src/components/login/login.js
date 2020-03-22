import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {onAuthorization} from '../../actions';

import './login.css';

const Login = ({isLoggedIn, login, password, onAuthorization, history}) => {
    
    const onSubmit = (e) => {
        e.preventDefault();
        let userLogin = document.getElementById('login').value;
        let userPassword = document.getElementById('password').value;

        if(userLogin === login && userPassword === password){
            onAuthorization();
            history.push('/profile');
        } else {
            document.getElementById('login').value = '';
            document.getElementById('password').value = '';

            document.getElementById('error-auth').innerHTML = 'Логін або пароль невірні';
        }
    }

    const loginBox = (
        <div>
            <div className="login-box py-5">
                <p>Авторизуйтесь!</p>
                <form onSubmit={onSubmit}>
                    <div className="group d-flex flex-column py-1">
                        <label htmlFor="login">Login</label>
                        <input type='text' id='login'>
                        </input>
                    </div>
                    <div className="group d-flex flex-column py-1">
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password'>
                        </input>
                    </div>
                    <button type="submit" className="btn-primary mt-2">
                        Login
                    </button>
                </form>
                <div id="error-auth"></div>
            </div>
        </div>
    )

    return loginBox
};

const mapStateToProps = ({isLoggedIn, login, password}) => ({isLoggedIn, login, password});

const mapDispatchToProps = {
    onAuthorization
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));