import { AuthState } from "../states/AuthState";
import { User } from "../entities/User";

export interface LoginProps {
    navigation: any;
    auth: AuthState;
    joinToRoom(user: User): any;
}
