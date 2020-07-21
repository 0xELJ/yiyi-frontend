import { AuthState } from "../states/AuthState";
import { LoginData } from '../entities/LoginData';

export interface LoginProps {
    navigation: any;
    auth: AuthState;
    joinToRoom(user: LoginData): any;
}
