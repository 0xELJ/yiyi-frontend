import { Message } from "./Message";
import { RoomData } from "./RoomData";

export interface ChatState {
    activeRoom: RoomData;
    messages: Message[];
    message: string;
}
