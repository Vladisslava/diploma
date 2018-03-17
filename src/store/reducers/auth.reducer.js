import * as authActions from '../../constants/actions/auth-actions.constants';

const defaultState = {
    id: undefined,
    token: undefined,
    isLoading: false,
    isLoadingFail: false,
};

const initialState = localStorage.getItem('auth-state') === null ?
    {...defaultState} : JSON.parse(localStorage.getItem('auth-state'));

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        case authActions.REGISTRATION_START:
            newState = {...state, isLoading: true, isLoadingFail: false};
            break;
        case authActions.REGISTRATION_SUCCESS:
            newState = {...state, isLoading: false, isLoadingFail: false};
            break;
        case authActions.REGISTRATION_FAIL:
            newState = {...state, isLoading: false, isLoadingFail: true};
            break;
        case authActions.LOGIN_START:
            newState = {...state, isLoading: true, isLoadingFail: false};
            break;
        case authActions.LOGIN_SUCCESS:
            newState = {...state, isLoading: false, isLoadingFail: false, id: payload.user.id, token: payload.user.token};
            break;
        case authActions.LOGIN_FAIL:
            newState = {...state, isLoading: false, isLoadingFail: true};
            break;
        case authActions.LOGOUT:
            newState = {...state, ...defaultState};
            break;
        default:
            newState = {...state};
    }

    localStorage.setItem('auth-state', JSON.stringify(newState));

    return newState;
}