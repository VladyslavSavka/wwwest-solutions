import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import FakeNewsService from './services/fakeNewsService';
import {FakeNewsServiceProvider} from './components/fakeNewsService-context';
import store from './store';
import ErrorBoundry from './components/error-boundry';

const fakeNewsService = new FakeNewsService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <FakeNewsServiceProvider value={fakeNewsService}>
                <Router>
                    <App/>
                </Router>
            </FakeNewsServiceProvider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));

