import { Action } from "../types/entities/Action";
import { ActionTypes } from "../constants/ActionTypes";
import { CustomModalState } from "../types/states/CustomModalState";

const INITIAL_STATE: CustomModalState = {
    visible: false,
    header: '',
    body: '',
    onAccept: () => {},
    onClose: () => {}
};

export function modalReducer(state = INITIAL_STATE, action: Action): CustomModalState {
    switch (action.type) {
        case ActionTypes.MODAL_SHOW:
            return {
                ...state,
                visible: true,
                header: action.payload.header,
                body: action.payload.body,
            };
        case ActionTypes.MODAL_CLOSE:
            return INITIAL_STATE;
        default:
            return state;
    }
}
