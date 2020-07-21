import { SocketClient } from "../types/entities/SocketClient";
import { ActionTypes } from "../constants/ActionTypes";
import { AppError } from '../types/entities/AppError';

export function socketMiddleware(socket: SocketClient) {
    // @ts-ignore
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { promise, type, types, error: actionError, ...rest } = action;

        if (type !== 'socket' || !promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });

        return promise(socket)
            .then((result: any) => {
                return next({ ...rest, payload: result, type: SUCCESS });
            })
            .catch((error: AppError) => {
                const errorMessage = action?.error ? action.error : error;
                next({ type: ActionTypes.MODAL_SHOW, payload: errorMessage });
                return next({ ...rest, payload: error, type: FAILURE });
            })
    };
}
