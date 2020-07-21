import { MessageData } from '../types/entities/MessageData';

export const validateMessage = (values: MessageData) => {
    let error: { message?: string } = {};

    if (!values.message) {
        error.message = 'Required';
    }

    return error;
};
