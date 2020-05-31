import { SocketState } from "../states/SocketState";
import { ConfirmModalState } from "../states/ConfirmModalState";

export interface RootProps {
    navigation: any,
    socket: SocketState,
    connectSocket(): void,
    listenForRoomData(): void,
    listenForMessage(): void,
    hideModal(): void,
    modal: ConfirmModalState,
}
