import { AuthState } from "./AuthState";
import { User } from "./User";

export interface LoginFormProps {
    navigation: any,
    auth: AuthState,
    usernameChanged(username: string): any,
    roomChanged(room: string): any,
    joinToRoom(user: User): any
}
