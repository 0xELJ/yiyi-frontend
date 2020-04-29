export enum ChatEvent {
    CONNECT = 'connect',
    CONNECT_ERROR = 'connect_error',
    DISCONNECT = 'disconnect',
    MESSAGE = 'message',
    SEND_MESSAGE = 'sendMessage',
    JOIN_ROOM = 'join',
    ALLOCATE_ROOM = 'roomData',
    LEAVE_ROOM = 'leave',
}
