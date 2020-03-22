import React from 'react';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({isLoggedIn}) => {

    const login = () => {
        if(!isLoggedIn){
            return (
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                </li>
            )
        } else {
            return(
                <li className="nav-item nav-link">Admin</li>
            );
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="https://wwwest.solutions/" target="_blank"
                rel="noopener noreferrer" className="navbar-brand">
                <img src="http://wwwest.solutions/wp-content/uploads/2019/01/2019-01-10-09.42.38.jpg" alt="logo" width="200" height="50"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news' className="nav-link">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-link">Profile</Link>
                    </li>
                    {login()}
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = ({isLoggedIn}) => ({isLoggedIn});

export default connect(mapStateToProps)(Header);