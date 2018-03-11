import * as userActions from '../../constants/actions/user-actions.constants';
import authorization from '../../services/auth.service';

export function authStart() {
    return {type: userActions.AUTH_USER_START}
}

export function loginSuccess(user) {
    return {type: userActions.LOGIN_USER_SUCCESS, payload: user}
}

export function loginFail() {
    return {type: userActions.LOGIN_USER_FAIL}
}

export function registrationSuccess() {
    return {type: userActions.REGISTRATION_SUCCESS}
}

export function registrationFail() {
    return {type: userActions.REGISTRATION_FAIL}
}

export function userSignin({username, password}) {
    return async (dispatch) => {
        try {
            dispatch(authStart());

            const res = await authorization.login(username, password);

            if (res.status === 200) {
                dispatch(loginSuccess(res.data));

                return true;
            } else {
                dispatch(loginFail());

                return false;
            }
        } catch (e) {
            dispatch(loginFail());

            return false;
        }
    }
}

export function userSignup(userData) {
    return async (dispatch) => {
        try {
            dispatch(authStart());

            const data = await authorization.registration(userData.username, userData.email, userData.password);

            console.log(data);
            
            if (data.status === 201) {
                dispatch(registrationSuccess());

                return true;
            } else {
                dispatch(registrationFail());

                return false;
            }
        } catch (e) {
            dispatch(registrationFail());

            return false;
        }
    }
}

export function userLogout() {
    return {type: userActions.LOGOUT}
}