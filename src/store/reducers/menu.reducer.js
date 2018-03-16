import * as menuActions from '../../constants/actions/menu-actions.constants';

const initialState = {
    isOpen: false
};

export default function (state = initialState, {type}) {
    switch (type) {
        case menuActions.MENU_OPEN:
            return {...state, isOpen: true};
        case menuActions.MENU_CLOSE:
            return {...state, isOpen: false};
        case menuActions.MENU_TOGGLE:
            return {...state, isOpen: !state.isOpen};
        default:
            return {...state}
    }
}