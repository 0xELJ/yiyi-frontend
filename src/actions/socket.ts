import { ActionTypes } from "../types/ActionTypes";
import { SocketClient } from "../types/SocketClient";
import { Action } from "../types/Action";

export function connect(): Action {
    return {
        type: 'socket',
        types: [
            ActionTypes.SOCKET_CONNECT_PENDING,
            ActionTypes.SOCKET_CONNECT_SUCCESS,
            ActionTypes.SOCKET_CONNECT_ERROR
        ],
        promise: (socket: SocketClient) => socket.connect()
    }
}

export function disconnect() {
    return {
        type: 'socket',
        types: [
            ActionTypes.SOCKET_DISCONNECT_PENDING,
            ActionTypes.SOCKET_DISCONNECT_SUCCESS,
            ActionTypes.SOCKET_DISCONNECT_ERROR
        ],
        promise: (socket: SocketClient) => socket.disconnect()
    }
}
