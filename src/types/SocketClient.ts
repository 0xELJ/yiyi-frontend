import io from "socket.io-client";
import { ChatEvent } from "./ChatEvent";

const host = 'http://192.168.0.3:3000';
const socketPath = '/socket.io';

export class SocketClient {
    private socket!: SocketIOClient.Socket;

    connect() {
        this.socket = io.connect(host, { path: socketPath });
        return new Promise((resolve, reject) => {
            this.socket.on(ChatEvent.CONNECT, () => resolve());
            this.socket.on(ChatEvent.RECONNECT, () => resolve());
            this.socket.on(ChatEvent.RECONNECTING, (attempt: number) => {
                if (attempt > 5) {
                    this.disconnect();
                    reject(new Error('Error al establecer conexion con el servidor'));
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

    emit(event: string, data: any) {
        return new Promise((resolve, reject) => {
            if (this.socket.disconnected) return reject('No socket connection.');

            return this.socket.emit(event, data, (response: any) => {
                if (response && response.error) {
                    return reject(response.error);
                }
                return resolve();
            });
        });
    }

    on(event: string, callback: Function) {
        return new Promise((resolve, reject) => {
            if (this.socket.disconnected) {
                return reject('No socket connection.')
            }
            this.socket.on(event, callback);
            resolve();
        });
    }
}
