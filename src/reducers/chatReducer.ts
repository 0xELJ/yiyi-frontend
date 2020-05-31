import { Action } from "../types/entities/Action";
import { ChatState } from "../types/states/ChatState";
import { ActionTypes } from "../constants/ActionTypes";

const INITIAL_STATE: ChatState = {
    activeRoom: {
        room: '',
        users: []
    },
    messages: [],
    message: ''
};

export function chatReducer(state = INITIAL_STATE, action: Action): ChatState {
    switch (action.type) {
        case ActionTypes.SOCKET_ROOM_DATA:
            return {
                ...state,
                activeRoom: {...action.payload}
            };
        case ActionTypes.SOCKET_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case ActionTypes.CHAT_MESSAGE_CHANGED:
            return {
                ...state,
                message: action.payload
            };
        case ActionTypes.SOCKET_LEAVE_ROOM_SUCCESS:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
}
