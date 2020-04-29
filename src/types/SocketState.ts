export interface SocketState {
    isConnecting: boolean,
    connectionError: string | Error,
    isDisconnecting: boolean,
    disconnectionError: string | Error,
    isConnected: boolean;
}
