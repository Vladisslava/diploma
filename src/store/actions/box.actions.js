import * as boxesActionConstants from '../../constants/actions/box-actions.constants';
import {apiConstants} from '../../constants/api.constants';
import axios from 'axios';
import {buildDataString} from '../../libs/helpers';

export function setBox(boxes) {
    return {type: boxesActionConstants.SET_BOX, payload: boxes}
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
    return async (dispatch) => {
        dispatch(boxesLoadStart());

        try {
            const boxes = await axios.get(`${apiConstants.baseUrl}${apiConstants.box}/${id}`);

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
                data: buildDataString(data)
            })();

            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
}