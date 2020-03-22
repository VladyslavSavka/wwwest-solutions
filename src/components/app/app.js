import React from 'react';
import {Switch, Route} from 'react-router-dom';
 
import Header from '../header';
import Home from '../home';
import Footer from '../footer';
import Login from '../login';
import Profile from '../profile';
import NewsList from '../news-list';

import './app.css';

const App = () => {
    return (
        <div>
            <Header/>
            <div className="body-bg">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={NewsList}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default App;