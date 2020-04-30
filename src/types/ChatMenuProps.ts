import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { ChatState } from "./ChatState";

export interface ChatMenuProps extends DrawerContentComponentProps{
    chat: ChatState,
    leaveRoom(room: string): any,
    listenForRoomData(): any,
    messageChanged(): any;
    sendMessage(): any
}
