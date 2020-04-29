export interface AuthState {
    username: string,
    room: string,
    loading: boolean,
    error: string | Error,
}
