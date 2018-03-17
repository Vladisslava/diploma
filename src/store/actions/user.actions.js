import axios from 'axios';
import {apiConstants} from "../../constants/api.constants";
import * as userActions from '../../constants/actions/user-actions.constants';

function updateUserInfo(data) {
    return {type: userActions.UPDATE_USER_INFO, payload: data}
}

export function updateUser(id, data) {
    return async (dispatch) => {
        let dataString = '';
        const keys = Object.keys(data);
        const keysCount = keys.length;

        keys.forEach((key, index) => {
            dataString += key + '=' + data[key];
            (index !== keysCount - 1) && (dataString += '&')
        });

        await axios.create({
            url: apiConstants.user + '/' + id,
            method: 'put',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: dataString
        })();

        dispatch(updateUserInfo({user: data}));
    }
}

export function getUserInfo(id) {
    return async (dispatch) => {
        const res = await axios.get(apiConstants.baseUrl + apiConstants.user + '/' + id);

        dispatch(updateUserInfo(res.data));
    }
}