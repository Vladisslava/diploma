import * as boxesActionConstants from 'constants/actions/box-actions.constants';
import {apiConstants} from 'constants/api.constants';
import axios from 'axios';
import {buildDataString} from 'libs/helpers';
import moment from 'moment';

const request = axios.create({
    baseURL: apiConstants.baseUrl,
});

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

export function searchBoxes(query, page) {
    return async dispatch => {
        const res = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/search?query=${query}&page=${page}`, {
            mode: 'no-cors',
        });

        dispatch(setBoxes({boxes: res.data}))
    }
}

export function downloadBoxesByPage(page) {
    return async (dispatch) => {
        dispatch(boxesLoadStart());

        try {
            const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/all/${page}`, {
                mode: 'no-cors',
            });
            
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
            const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/${id}?user=${user}`, {
                mode: 'no-cors',
            });

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
        const res = await axios.create({
            url: apiConstants.box,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            mode: 'no-cors',
            data: {
                ...data,
                dateEnd: formatDate(data),
                dateDistribution: formatDate(data.dateDistribution),
            }
        })();

        dispatch({
            type: boxesActionConstants.CREATE_BOX,
            payload: res.data.box,
        });
        return res;
    }
}

export function updateBox(payload) {
    return async (dispatch) => {
        const res = await request.put(`${apiConstants.box}/${payload.id}`, payload.data);

        dispatch({
            type: boxesActionConstants.UPDATE_BOX,
            payload: res.data,
        })
    };
}

export function deleteBox(id) {
    return async dispatch => {
        await request.delete(`${apiConstants.box}/${id}`);

        dispatch({
            type: boxesActionConstants.DELETE_BOX,
            payload: id
        })
    }
}

export function joinTheBox(data) {
    return async (dispatch) => {
        try {
            const res = await axios.create({
                url: apiConstants.box + '/join',
                method: 'post',
                baseURL: apiConstants.baseUrl,
                mode: 'no-cors',
                data
            })();

            dispatch({
                type: boxesActionConstants.BOX_JOIN,
                payload: data
            });

            return res;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

export function isJoinedToBox(data) {
    return async dispatch => {
        const res = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/join?${buildDataString(data)}`, {
            mode: 'no-cors',
        });

        return res.data.isJoined;
    }
}

export function getWard(box) {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;

        const res = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/ward`, {
            mode: 'no-cors',
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
            await axios.create({
                method: 'post',
                url: apiConstants.box + '/leave',
                baseURL: apiConstants.baseUrl,
                mode: 'no-cors',
                data
            })();

            dispatch({
                type: boxesActionConstants.BOX_LEAVE,
                payload: data,
            })
        } catch (e) {
            console.log(e);
        }
    }
}
