import { Action } from "../types/Action";
import { ActionTypes } from "../constants/ActionTypes";
import { ConfirmModalState } from "../types/ConfirmModalState";

const INITIAL_STATE: ConfirmModalState = {
    visible: false,
    header: '',
    body: '',
    acceptLabel: '',
    onAccept: () => {},
    onClose: () => {}
};

export function modalReducer(state = INITIAL_STATE, action: Action): ConfirmModalState {
    switch (action.type) {
        case ActionTypes.MODAL_SHOW:
            return {
                ...state,
                visible: true,
                header: action.payload.header,
                body: action.payload.body,
                acceptLabel: action.payload.acceptLabel,
            };
        case ActionTypes.MODAL_CLOSE:
            return INITIAL_STATE;
        default:
            return state;
    }
}
