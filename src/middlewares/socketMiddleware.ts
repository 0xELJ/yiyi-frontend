import { SocketClient } from "../types/SocketClient";

export function socketMiddleware(socket: SocketClient) {
    // @ts-ignore
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { promise, type, types, ...rest } = action;

        if (type !== 'socket' || !promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({...rest, type: REQUEST});

        return promise(socket)
            .then((result: any) => {
                return next({...rest, payload: result, type: SUCCESS });
            })
            .catch((error: Error) => {
                return next({...rest, error, payload: error.message, type: FAILURE });
            })
    };
}
