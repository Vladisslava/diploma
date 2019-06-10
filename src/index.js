import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import './index.css';
import 'react-notifications/lib/notifications.css';
import registerServiceWorker from './registerServiceWorker';
import {createHashHistory} from 'history';
import configureStore from 'store/configure-store';
import {NotificationContainer} from 'react-notifications';

import {App} from 'pages';

const history = createHashHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
