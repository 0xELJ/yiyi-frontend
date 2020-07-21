import io from "socket.io-client";
import { SERVER_URL, SERVER_PORT, SOCKET_PATH } from 'react-native-dotenv';
import { ChatEvent } from "../../constants/ChatEvent";
import { AppError } from './AppError';
import { ResponseMessage } from './ResponseMessage';

export class SocketClient {
    private socket!: SocketIOClient.Socket;
    private readonly host = `${SERVER_URL}:${SERVER_PORT}`;
    private readonly path = SOCKET_PATH;
    private readonly connectionError: AppError = {
        header: 'Connection error',
        body: 'Could not establish connection with the server'
    };

    connect() {
        this.socket = io.connect(this.host, { path: this.path });
        return new Promise((resolve, reject) => {
            this.socket.on(ChatEvent.CONNECT, () => resolve());
            this.socket.on(ChatEvent.RECONNECT, () => resolve());
            this.socket.on(ChatEvent.RECONNECTING, (attempt: number) => {
                if (attempt > 2) {
                    this.disconnect();
                    reject(this.connectionError);
                }
            });
        });
    }

    disconnect() {
        return new Promise((resolve) => {
            this.socket = this.socket.disconnect();
            this.socket.on(ChatEvent.DISCONNECT, () => resolve());
        });
    }

    emit(event: ChatEvent, eventData: any) {
        return new Promise((resolve, reject) => {
            if (this.socket.disconnected) {
                reject(this.connectionError);
            }
            return this.socket.emit(event, eventData, ({ error, data}: ResponseMessage) => {
                if (error) {
                    const appError: AppError = { header: 'Server error', body: error };
                    reject(appError);
                }
                resolve(data);
            });
        });
    }

    on(event: ChatEvent, callback: Function) {
        return new Promise((resolve, reject) => {
            if (this.socket.disconnected) {
                reject(this.connectionError)
            }
            this.socket.on(event, callback);
            resolve();
        });
    }
}
