import * as boxesActionConstants from 'constants/actions/box-actions.constants';
import {apiConstants} from 'constants/api.constants';
import axios from 'axios';
import {buildDataString} from 'libs/helpers';
import moment from 'moment';

function timezoneOffset() {
    return new Date().getTimezoneOffset() / 60
}

function formatDate(date) {
    return moment(date).startOf('day').subtract(timezoneOffset(), 'h').toISOString()
}

export function setBox(boxes) {
    return {type: boxesActionConstants.SET_BOX, payload: boxes}
}

export function setBoxPassword(payload) {
    return {type: boxesActionConstants.SET_BOX_PASSWORD, payload}
}

export function setBoxes(boxes) {
    return {type: boxesActionConstants.SET_BOXES, payload: boxes}
}

export function boxesLoadStart() {
    return {type: boxesActionConstants.BOXES_LOADING}
}

export function boxesLoadFail() {
    return {type: boxesActionConstants.BOXES_LOADING_FAIL}
}

export function boxesLoadSuccess() {
    return {type: boxesActionConstants.BOXES_LOADING_SUCCESS}
}

export function downloadBoxesByPage(page) {
    return async (dispatch) => {
        dispatch(boxesLoadStart());

        try {
            const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/all/${page}`);
            
            dispatch(boxesLoadSuccess());
            dispatch(setBoxes(boxes.data));
        } catch (e) {
            console.log(e);

            dispatch(boxesLoadFail());
        }
    }
}

export function downloadBox(id) {
    return async (dispatch, getState) => {
        dispatch(boxesLoadStart());

        try {
            const user = getState().auth.id;
            const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/${id}?user=${user}`);

            dispatch(boxesLoadSuccess());
            dispatch(setBox(boxes.data));
        } catch (e) {
            console.log(e);

            dispatch(boxesLoadFail());
        }
    }
}

export function createBox(data) {
    return async (dispatch) => {
        try {
            const res = await axios.create({
                url: apiConstants.box,
                method: 'post',
                baseURL: apiConstants.baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: buildDataString({
                    ...data,
                    users: [],
                    dateEnd: formatDate(data.dateEnd),
                    dateDistribution: formatDate(data.dateDistribution),
                })
            })();

            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export function joinTheBox(data) {
    return async (dispatch) => {
        try {
            const res = await axios.create({
                url: apiConstants.box + '/join',
                method: 'post',
                baseURL: apiConstants.baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: buildDataString(data)
            })();

            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export function isJoinedToBox(data) {
    return async dispatch => {
        const res = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/join?${buildDataString(data)}`);

        return res.data.isJoined;
    }
}

export function getWard(box) {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;

        const res = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/ward`, {
            params: {
                user: userId,
                box
            }
        });

        dispatch({
            type: boxesActionConstants.GET_WARD,
            payload: {
                boxId: box,
                user: res.data.data
            }
        });
    }
}

export function leaveBox(data) {
    return async (dispatch) => {
        try {
            return await axios.create({
                method: 'post',
                url: apiConstants.box + '/leave',
                baseURL: apiConstants.baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: buildDataString(data)
            })();
        } catch (e) {
            console.log(e);
        }
    }
}