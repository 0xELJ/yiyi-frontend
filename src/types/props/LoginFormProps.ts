import { AuthState } from "../states/AuthState";
import { User } from "../entities/User";

export interface LoginFormProps {
    navigation: any,
    auth: AuthState,
    usernameChanged(username: string): any,
    roomChanged(room: string): any,
    joinToRoom(user: User): any
}
