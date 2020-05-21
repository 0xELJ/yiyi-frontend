import { ActionTypes } from "../constants/ActionTypes";
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
        promise: (socket: SocketClient) => socket.connect(),
    };
}
