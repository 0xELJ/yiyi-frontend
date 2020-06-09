import { Action } from "../types/entities/Action";
import { AuthState } from "../types/states/AuthState";
import { ActionTypes } from "../constants/ActionTypes";
import { RequestStatus } from '../constants/RequestStatus';

const INITIAL_STATE: AuthState = {
    status: RequestStatus.PENDING,
    error: '',
    currentUser: {
        id: '',
        username: '',
        room: ''
    }
};

export function authReducer(state = INITIAL_STATE, action: Action): AuthState {
    switch (action.type) {
        case ActionTypes.AUTH_JOIN_ROOM_PENDING:
            return {
                ...state,
                status: RequestStatus.LOADING,
                currentUser: INITIAL_STATE.currentUser,
                error: ''
            };
        case ActionTypes.AUTH_JOIN_ROOM_SUCCESS:
            return {
                ...state,
                status: RequestStatus.SUCCESSFUL,
                currentUser: action.payload,
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
