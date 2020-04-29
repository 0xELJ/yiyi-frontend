import { ActionTypes } from "../types/ActionTypes";
import { Action } from "../types/Action";
import { SocketState } from "../types/SocketState";

const INITIAL_STATE: SocketState = {
    isConnecting: false,
    connectionError: '',
    isDisconnecting: false,
    disconnectionError: '',
    isConnected: false,
};

export function socketReducer(state = INITIAL_STATE, action: Action): SocketState {
    switch (action.type) {
        case ActionTypes.SOCKET_CONNECT_PENDING:
            return {
                ...state,
                isConnecting: true
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
        case ActionTypes.SOCKET_DISCONNECT_PENDING:
            return {
                ...state,
                isDisconnecting: true
            };
        case ActionTypes.SOCKET_DISCONNECT_SUCCESS:
            return {
                ...state,
                isDisconnecting: false,
                disconnectionError: '',
                isConnected: false,
            };
        case ActionTypes.SOCKET_DISCONNECT_ERROR:
            return {
                ...state,
                isDisconnecting: false,
                disconnectionError: action.payload
            };
        default:
            return state;
    }
}
