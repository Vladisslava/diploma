import * as userActions from '../../constants/actions/user-actions.constants';

const defaultState = {
    username: undefined,
    email: undefined,
    id: undefined,
    token: undefined,
    isAuth: false,
    isAuthFail: false
};

const initialState = localStorage.getItem('user-state') === null ?
    {...defaultState} : JSON.parse(localStorage.getItem('user-state'));

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        case userActions.AUTH_USER_START:
            newState = {...state, isAuth: true};
            break;
        case userActions.LOGIN_USER_SUCCESS:
            newState = {
                ...state,
                isAuth: false,
                isAuthFail: false,
                username: payload.user.username,
                id: payload.user.id,
                token: payload.token,
                email: payload.user.email
            };
            break;
        case userActions.LOGIN_USER_FAIL:
            newState = {...state, isAuth: false, isAuthFail: true};
            break;
        case userActions.LOGOUT:
            newState = {...defaultState};
            break;
        default:
            newState = state;
            break;
    }

    localStorage.setItem('user-state', JSON.stringify(newState));

    return newState;
}