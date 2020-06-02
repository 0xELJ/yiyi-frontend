import { LoginData } from '../types/entities/LoginData';

export const validateLogin = ({ username, room }: LoginData) => {
    const errors: { username?: string, room?: string } = {};

    if (!username) {
        errors.username = 'Username is required';
    }
    if (!room) {
        errors.room = 'Room is required';
    }

    return errors;
};
