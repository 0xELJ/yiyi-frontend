import { ActionTypes } from "../constants/ActionTypes";
import { Action } from "../types/entities/Action";
import { SocketState } from "../types/states/SocketState";

const INITIAL_STATE: SocketState = {
    isConnecting: false,
    connectionError: '',
    isConnected: false,
};

export function socketReducer(state = INITIAL_STATE, action: Action): SocketState {
    switch (action.type) {
        case ActionTypes.SOCKET_CONNECT_PENDING:
            return {
                ...state,
                isConnecting: true,
                connectionError: ''
            };
        case ActionTypes.SOCKET_CONNECT_SUCCESS:
            return {
                ...state,
                isConnecting: false,
                isConnected: true,
                connectionError: '',
            };
        case ActionTypes.SOCKET_CONNECT_ERROR:
            return {
                ...state,
                isConnecting: false,
                connectionError: action.payload
            };
        default:
            return state;
    }
}
