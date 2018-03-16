import {combineReducers} from 'redux';

import userReducer from './user.reducer';
import boxReducer from './box.reducer';
import menuReducer from './menu.reducer';

export default combineReducers({
    user: userReducer,
    box: boxReducer,
    menu: menuReducer
})