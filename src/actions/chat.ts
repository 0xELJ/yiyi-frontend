import { ActionTypes } from "../constants/ActionTypes";
import { ChatEvent } from "../constants/ChatEvent";
import { RoomData } from "../types/entities/RoomData";
import { Message } from "../types/entities/Message";
import { SocketClient } from "../types/entities/SocketClient";
import { Dispatch } from "redux";

export function listenForRoomData() {
    return (dispatch: Dispatch) => {
        const roomUpdate = (room: RoomData) => {
            return dispatch({
                type: ActionTypes.SOCKET_ROOM_DATA,
                payload: room
            });
        };

        return dispatch({
            type: 'socket',
            types: [null, null, null],
            promise: (socket: SocketClient) => socket.on(ChatEvent.ALLOCATE_ROOM, roomUpdate)
        })
    }
}

export function listenForMessage() {
    return function (dispatch: Dispatch) {
        const chatUpdate = (message: Message) => {
            return dispatch({
                type: ActionTypes.SOCKET_NEW_MESSAGE,
                payload: message
            });
        };

        return dispatch({
            type: 'socket',
            types: [null, null, null],
            promise: (socket: SocketClient) => socket.on(ChatEvent.MESSAGE, chatUpdate)
        })
    }
}

export function sendMessage(message: string) {
    return {
        type: 'socket',
        types: [
            ActionTypes.SOCKET_SEND_MESSAGE_PENDING,
            ActionTypes.SOCKET_SEND_MESSAGE_SUCCESS,
            ActionTypes.SOCKET_SEND_MESSAGE_ERROR
        ],
        promise: (socket: SocketClient) => socket.emit(ChatEvent.SEND_MESSAGE, message)
    }
}
