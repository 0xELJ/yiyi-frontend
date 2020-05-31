import { ChatState } from '../states/ChatState';

export interface ChatRoomProps {
    chat: ChatState;
    messageChanged(msg: string): any;
    sendMessage(msg: string): any;
}
