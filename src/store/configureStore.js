import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import RootReducer from './reducers/root.reducer'

const logger = createLogger();
let configureStore;

if (process.env.NODE_ENV === 'development') {
    configureStore = function (history) {
        return createStore(
            RootReducer,
            applyMiddleware(
                logger,
                thunk,
                routerMiddleware(history)
            )
        );
    }
} else {
    configureStore = function (history) {
        return createStore(
            RootReducer,
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        );
    }
}

export default configureStore;