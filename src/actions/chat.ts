import { ActionTypes } from "../types/ActionTypes";
import { ChatEvent } from "../types/ChatEvent";
import { RoomData } from "../types/RoomData";
import { Message } from "../types/Message";
import { SocketClient } from "../types/SocketClient";
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

export function sendMessage(message: Message) {
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

export const messageChanged = (message: string) => {
    return {
        type: ActionTypes.CHAT_MESSAGE_CHANGED,
        payload: message
    };
};
