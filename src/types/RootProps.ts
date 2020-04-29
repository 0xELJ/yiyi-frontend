import { SocketState } from "./SocketState";

export interface RootProps {
    navigation: any,
    socket: SocketState,
    connectSocket(): void,
    listenForRoomData(): void,
    listenForMessage(): void
}
