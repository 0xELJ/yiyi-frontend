import { ChatState } from "./ChatState";

export interface ChatMenuProps {
    navigation: any;
    chat: ChatState,
    leaveRoom(room: string): any,
    listenForRoomData(): any,
    messageChanged(): any;
    sendMessage(): any
}
