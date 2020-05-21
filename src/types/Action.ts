import { SocketClient } from "./SocketClient";
import { AppError } from "./AppError";

export interface Action {
    type: string;
    types: [string, string, string];
    payload?: any;
    promise?(socket: SocketClient): Promise<any>,
    error?: AppError;
}
