import * as authActions from '../../constants/actions/auth-actions.constants';
import authorization from "../../libs/auth.service";

export function loginStart() {
    return {type: authActions.LOGIN_START}
}

export function loginSuccess(user) {
    return {type: authActions.LOGIN_SUCCESS, payload: user}
}

export function loginFail() {
    return {type: authActions.LOGIN_FAIL}
}

export function registrationStart() {
    return {type: authActions.REGISTRATION_START}
}

export function registrationSuccess() {
    return {type: authActions.REGISTRATION_SUCCESS}
}

export function registrationFail() {
    return {type: authActions.REGISTRATION_FAIL}
}

export function userLogout() {
    return {type: authActions.LOGOUT}
}

export function userSignin({username, password}) {
    return async (dispatch) => {
        try {
            dispatch(loginStart());

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
            dispatch(registrationStart());

            const data = await authorization.registration(userData.username, userData.email, userData.password);

            if (data.status === 201) {
                dispatch(registrationSuccess());

                return {error: false, msg: data.data.msg};
            } else {
                dispatch(registrationFail());

                return {
                    error: true,
                    msg: data.data.msg,
                };
            }
        } catch (e) {
            dispatch(registrationFail());

            return {
                error: true,
                msg: e.response ? e.response.data.msg : 'Проблемы с соеденением',
            };
        }
    }
}

export function generateForgotCode(email) {
    return async dispatch => {
        try {
            await authorization.generateForgotCode(email)
        } catch (e) {
            console.error(e)
        }
    }
}

export function restorePassword(email, code, password) {
    return async dispatch => {
        try {
            return await authorization.restorePassword(email, code, password);
        } catch (e) {
            return e;
        }
    };
}
