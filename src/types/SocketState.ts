export interface SocketState {
    isConnecting: boolean,
    connectionError: string,
    isDisconnecting: boolean,
    disconnectionError: string | Error,
    isConnected: boolean;
}
