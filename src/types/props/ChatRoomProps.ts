import { ChatState } from '../states/ChatState';

export interface ChatRoomProps {
    chat: ChatState;
    userId: string;
    messageChanged(msg: string): any;
    sendMessage(msg: string): any;
}
