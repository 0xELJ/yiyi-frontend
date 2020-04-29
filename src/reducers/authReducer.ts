import { Action } from "../types/Action";
import { AuthState } from "../types/AuthState";
import { ActionTypes } from "../types/ActionTypes";

const INITIAL_STATE: AuthState = {
    username: '',
    room: '',
    loading: false,
    error: ''
};

export function authReducer(state = INITIAL_STATE, action: Action): AuthState {
    switch (action.type) {
        case ActionTypes.AUTH_USERNAME_CHANGED:
            return {
                ...state,
                username: action.payload
            };
        case ActionTypes.AUTH_ROOM_CHANGED:
            return {
                ...state,
                room: action.payload
            };
        case ActionTypes.AUTH_JOIN_ROOM_PENDING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ActionTypes.AUTH_JOIN_ROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                username: '',
                room: '',
            };
        case ActionTypes.AUTH_JOIN_ROOM_ERROR:
            return {
                ...state,
                loading: false,
                error: ''
            };
        default:
            return state;
    }
}
