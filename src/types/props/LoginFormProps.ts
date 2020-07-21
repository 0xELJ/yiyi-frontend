import { LoginData } from '../entities/LoginData';

export interface LoginFormProps {
    onSubmit(loginData: LoginData): void;
    isSubmitting: boolean;
}
