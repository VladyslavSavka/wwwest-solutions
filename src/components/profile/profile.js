import React from 'react';
import {connect} from 'react-redux';

import './profile.css';
import { Redirect } from 'react-router-dom';

const Profile = ({isLoggedIn}) => {
    if(!isLoggedIn) {
        return <Redirect to='/login'/>
    }

    return (
        <div className="profile container py-5 ">
            <p className="profile-title">Ваш профіль</p>
            <div>
                <p>Ім'я: Admin </p>
                <p>Пароль: 12345</p>
                <p>Дата реєстрації: 20.03.2020</p>
                <p>Місце проживання: м.Львів</p>
                <p>Місце роботи: Веб-студія West Solutions</p>
            </div>
        </div>
    )
};

const mapStateToProps = ({isLoggedIn}) => ({isLoggedIn});

export default connect(mapStateToProps)(Profile);