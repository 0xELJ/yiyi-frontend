import { ActionTypes } from "../constants/ActionTypes";

export function showModal() {}

export function hideModal() {
    return { type: ActionTypes.MODAL_CLOSE };
}
