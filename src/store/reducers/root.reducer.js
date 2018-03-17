import {combineReducers} from 'redux';

import userReducer from './user.reducer';
import boxReducer from './box.reducer';
import menuReducer from './menu.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
    user: userReducer,
    box: boxReducer,
    menu: menuReducer,
    auth: authReducer
})