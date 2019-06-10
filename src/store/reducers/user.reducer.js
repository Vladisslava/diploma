import * as userActions from '../../constants/actions/user-actions.constants';

const defaultState = {
    username: undefined,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    gender: undefined,
    yearOfBirth: undefined,
    phone: undefined,
    photo: undefined,
    country: undefined,
    city: undefined,
    address: undefined,
    postcode: undefined,
    favoritesBox: undefined
};

const initialState = localStorage.getItem('user-state') === null ?
    {...defaultState} : JSON.parse(localStorage.getItem('user-state'));

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        case userActions.UPDATE_FAVORITE_BOX:
            newState = {...state, favoritesBox: payload};
            break;
        case userActions.UPDATE_USER_INFO:
            newState = {...state, ...payload.user};
            break;
        case userActions.UPDATE_USER_PHOTO:
            newState = {...state, photo: payload};
            break;
        default:
            newState = state;
            break;
    }

    localStorage.setItem('user-state', JSON.stringify(newState));

    return newState;
}
