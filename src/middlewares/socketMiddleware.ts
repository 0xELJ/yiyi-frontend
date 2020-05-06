import { SocketClient } from "../types/SocketClient";
import { ActionTypes } from "../types/ActionTypes";

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
        next({...rest, type: REQUEST});

        return promise(socket)
            .then((result: any) => {
                return next({...rest, payload: result, type: SUCCESS });
            })
            .catch((error: any) => {
                if (action.error) {
                    next({ type: ActionTypes.MODAL_SHOW, payload: action.error });
                }
                return next({...rest, payload: action.error.body, type: FAILURE });
            })
    };
}
