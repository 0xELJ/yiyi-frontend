export enum ChatEvent {
    CONNECT = 'connect',
    RECONNECT = 'reconnect',
    RECONNECTING = 'reconnecting',
    DISCONNECT = 'disconnect',
    MESSAGE = 'message',
    SEND_MESSAGE = 'sendMessage',
    JOIN_ROOM = 'join',
    ALLOCATE_ROOM = 'roomData',
    LEAVE_ROOM = 'leave',
}
