import * as boxesActionConstants from '../../constants/actions/box-actions.constants';
import {apiConstants} from '../../constants/api.constants';
import axios from 'axios';

export function setBoxes(boxes) {
    return {type: boxesActionConstants.SET_BOXES, payload: boxes}
}

export function boxesLoadStart() {
    return {type: boxesActionConstants.BOXES_LOADING}
}

export function boxesLoadFail() {
    return {type: boxesActionConstants.BOXES_LOADING_FAIL}
}

export function boxesLoadSuccess(boxes) {
    return {type: boxesActionConstants.BOXES_LOADING_SUCCESS, payload: boxes}
}

export function downloadBoxes() {
    return async (dispatch) => {
        dispatch(boxesLoadStart());

        try {
            const boxes = await axios.get(apiConstants.baseUrl + apiConstants.box);

            dispatch(boxesLoadSuccess(boxes));
        } catch (e) {
            console.log(e);

            dispatch(boxesLoadFail());
        }
    }
}

export function createBox({name, dateEnd, isPrivate, password, users, description, authorId}) {
    return async (dispatch) => {
        try {
            const res = await axios.create({
                url: apiConstants.box,
                method: 'post',
                baseURL: apiConstants.baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: `name=${name}&dateEnd=${dateEnd}&isPrivate=${isPrivate}&password=${password}&users=${users}&description=${description}&authorId=${authorId}`
            })();

            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
}