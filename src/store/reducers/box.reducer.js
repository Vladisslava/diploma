import * as boxesActionConstants from 'constants/actions/box-actions.constants';

const defaultState = {
    boxes: [],
    ward: {
        boxId: undefined,
        user: undefined
    },
    box: undefined,
    page: 0,
    pages: 0,
    total: 0,
    boxesIsLoading: false,
    boxesLoadingFail: false,

};

const initialState = {...defaultState};

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        case boxesActionConstants.CREATE_BOX:
            newState = {...state, boxes: [...state.boxes, payload]};
            break;
        case boxesActionConstants.SET_BOX:
            newState = {...state, box: payload.box};
            break;
        case boxesActionConstants.GET_WARD:
            newState = {...state, ward: payload};
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
        case boxesActionConstants.SET_BOX_PASSWORD:
            newState = {...state, box: {...state.box, password: payload}};
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
        case boxesActionConstants.BOX_JOIN:
            newState = {
                ...state, box: {
                    ...state.box,
                    users: [...state.box.users, payload]
                }
            };
            break;
        case boxesActionConstants.BOX_LEAVE:
            newState = {
                ...state,
                boxes: state.boxes.map(item => {
                    if (item._id === payload.boxId) {
                        return {
                            ...item,
                            users: item.users.filter(item => item.user !== payload.userId),
                        };
                    } else {
                        return item;
                    }
                })
            };
            break;
        default:
            newState = {...state};
            break;
    }

    return newState;
}
