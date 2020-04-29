import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { ChatState } from "./ChatState";

export interface ChatMenuProps extends DrawerContentComponentProps{
    disconnect(): any,
    listenForRoomData(): any,
    chat: ChatState,
    messageChanged(): any;
    sendMessage(): any
}
