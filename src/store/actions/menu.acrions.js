import * as menuActions from '../../constants/actions/menu-actions.constants';

export function menuOpen() {
    return {type: menuActions.MENU_OPEN}
}

export function menuClose() {
    return {type: menuActions.MENU_CLOSE}
}

export function menuToggle() {
    return {type: menuActions.MENU_TOGGLE}
}