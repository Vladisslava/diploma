import axios from 'axios';
import {apiConstants} from "../../constants/api.constants";
import * as userActions from '../../constants/actions/user-actions.constants';
import {buildDataString} from '../../libs/helpers';

function updateUserInfo(data) {
    return {type: userActions.UPDATE_USER_INFO, payload: data}
}

export function updateUser(id, data) {
    return async (dispatch) => {
        await axios.create({
            url: apiConstants.user + '/' + id,
            method: 'put',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: buildDataString(data)
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

export function updateFavoriteBox(payload) {
    return {type: userActions.UPDATE_FAVORITE_BOX, payload}
}

export function favoriteBox(data) {
    return async (dispatch) => {
        try {
            const res = await axios.create({
                url: apiConstants.box + '/favorite',
                method: 'post',
                baseURL: apiConstants.baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: buildDataString(data)
            })();

            dispatch(updateFavoriteBox(res.data.favoritesBox))
        } catch (e) {
            console.log(e);
        }
    }
}