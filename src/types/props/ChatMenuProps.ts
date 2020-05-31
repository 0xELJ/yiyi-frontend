import { ChatState } from "../states/ChatState";
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';

export interface ChatMenuProps extends DrawerContentComponentProps {
    navigation: any;
    chat: ChatState;
    leaveRoom(room: string): any;
}
