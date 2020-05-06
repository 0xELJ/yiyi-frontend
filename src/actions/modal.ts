import { ActionTypes } from "../types/ActionTypes";

export function showModal() {}

export function hideModal() {
    return { type: ActionTypes.MODAL_CLOSE };
}
