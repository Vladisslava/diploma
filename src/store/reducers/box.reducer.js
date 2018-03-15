const defaultState = {
    allBoxes: [],
    boxesIsLoading: false
};

const initialState = {...defaultState};

export default function (state = initialState, {type, payload}) {
    let newState;

    switch (type) {
        default:
            newState = {...state};
            break;
    }

    return newState;
}