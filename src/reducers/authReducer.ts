import { Action } from "../types/entities/Action";
import { AuthState } from "../types/states/AuthState";
import { ActionTypes } from "../constants/ActionTypes";
import { RequestStatus } from '../constants/RequestStatus';

const INITIAL_STATE: AuthState = {
    status: RequestStatus.PENDING,
    error: ''
};

export function authReducer(state = INITIAL_STATE, action: Action): AuthState {
    switch (action.type) {
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
