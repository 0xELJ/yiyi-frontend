import { Message } from "../entities/Message";
import { RoomData } from "../entities/RoomData";

export interface ChatState {
    activeRoom: RoomData;
    messages: Message[];
}
