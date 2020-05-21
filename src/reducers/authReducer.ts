import { Action } from "../types/Action";
import { AuthState } from "../types/AuthState";
import { ActionTypes } from "../constants/ActionTypes";
import { RequestStatus } from '../constants/RequestStatus';

const INITIAL_STATE: AuthState = {
    username: '',
    room: '',
    status: RequestStatus.PENDING,
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
                status: RequestStatus.LOADING,
                error: ''
            };
        case ActionTypes.AUTH_JOIN_ROOM_SUCCESS:
            return {
                ...state,
                status: RequestStatus.SUCCESSFUL,
                username: '',
                room: '',
            };
        case ActionTypes.AUTH_JOIN_ROOM_ERROR:
            return {
                ...state,
                status: RequestStatus.FAILED,
                error: action.payload
            };
        default:
            return state;
    }
}
