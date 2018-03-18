import * as boxesActionConstants from '../../constants/actions/box-actions.constants';

const defaultState = {
    boxes: [],
    box: undefined,
    page: 0,
    pages: 0,
    total: 0,
    boxesIsLoading: false,
    boxesLoadingFail: false
};

const initialState = {...defaultState};

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        case boxesActionConstants.SET_BOX:
            newState = {...state, box: payload.box};
            break;
        case boxesActionConstants.SET_BOXES:
            newState = {
                ...state,
                boxes: payload.boxes.docs,
                page: +payload.boxes.page,
                pages: payload.boxes.pages,
                total: payload.boxes.total
            };
            break;
        case boxesActionConstants.BOXES_LOADING:
            newState = {...state, boxesIsLoading: true};
            break;
        case boxesActionConstants.BOXES_LOADING_SUCCESS:
            newState = {
                ...state,
                boxesIsLoading: false,
                boxesLoadingFail: false
            };
            break;
        case boxesActionConstants.BOXES_LOADING_FAIL:
            newState = {...state, boxesLoadingFail: true, boxesIsLoading: false};
            break;
        default:
            newState = {...state};
            break;
    }

    return newState;
}