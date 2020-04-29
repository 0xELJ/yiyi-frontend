import { SocketClient } from "./SocketClient";

export interface Action {
    type: string;
    types: [string, string, string];
    payload?: any;
    promise?(socket: SocketClient): Promise<any>,
}
