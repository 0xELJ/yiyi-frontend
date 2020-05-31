import io from "socket.io-client";
import { ChatEvent } from "../../constants/ChatEvent";
import { AppError } from './AppError';
import { ResponseMessage } from './ResponseMessage';

const host = 'http://192.168.0.16:5000';
const socketPath = '/socket.io';

export class SocketClient {
    private socket!: SocketIOClient.Socket;
    private readonly connectionError: AppError = {
        header: 'Connection error',
        body: 'Could not establish connection with the server'
    };

    connect() {
        this.socket = io.connect(host, { path: socketPath });
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
            return this.socket.emit(event, eventData, ({ error}: ResponseMessage) => {
                if (error) {
                    const appError: AppError = { header: 'Server error', body: error };
                    reject(appError);
                }
                resolve();
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
