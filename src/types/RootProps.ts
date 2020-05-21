import { SocketState } from "./SocketState";
import { ConfirmModalState } from "./ConfirmModalState";

export interface RootProps {
    navigation: any,
    socket: SocketState,
    connectSocket(): void,
    listenForRoomData(): void,
    listenForMessage(): void,
    hideModal(): void,
    modal: ConfirmModalState,
}
