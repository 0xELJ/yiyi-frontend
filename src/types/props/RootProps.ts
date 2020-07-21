import { SocketState } from "../states/SocketState";
import { CustomModalState } from "../states/CustomModalState";

export interface RootProps {
    navigation: any,
    socket: SocketState,
    connectSocket(): void,
    listenForRoomData(): void,
    listenForMessage(): void,
    hideModal(): void,
    modal: CustomModalState,
}
