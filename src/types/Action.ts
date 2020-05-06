import { SocketClient } from "./SocketClient";
import { ActionError } from "./ActionError";

export interface Action {
    type: string;
    types: [string, string, string];
    payload?: any;
    promise?(socket: SocketClient): Promise<any>,
    error?: ActionError;
}
