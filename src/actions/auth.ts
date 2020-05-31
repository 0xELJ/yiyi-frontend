import { ActionTypes } from "../constants/ActionTypes";
import { User } from "../types/entities/User";
import { SocketClient } from "../types/entities/SocketClient";
import { ChatEvent } from "../constants/ChatEvent";
import { Action } from "../types/entities/Action";

export const usernameChanged = (username: string) => {
    return {
      type: ActionTypes.AUTH_USERNAME_CHANGED,
      payload: username
    };
};

export const roomChanged = (room: string) => {
    return {
        type: ActionTypes.AUTH_ROOM_CHANGED,
        payload: room
    };
};

export function joinToRoom(user: User): Action {
    return {
        type: 'socket',
        types: [
            ActionTypes.AUTH_JOIN_ROOM_PENDING,
            ActionTypes.AUTH_JOIN_ROOM_SUCCESS,
            ActionTypes.AUTH_JOIN_ROOM_ERROR,
        ],
        promise: (socket: SocketClient) => socket.emit(ChatEvent.JOIN_ROOM, user)
    };
}

export function leaveRoom(room: string) {
    return {
        type: 'socket',
        types: [
            ActionTypes.SOCKET_LEAVE_ROOM_PENDING,
            ActionTypes.SOCKET_LEAVE_ROOM_SUCCESS,
            ActionTypes.SOCKET_LEAVE_ROOM_ERROR
        ],
        promise: (socket: SocketClient) => socket.emit(ChatEvent.LEAVE_ROOM, { room })
    };
}
