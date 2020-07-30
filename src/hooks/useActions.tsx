import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export function useActions<T>(actions: T, deps: any[]): any {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(action => bindActionCreators(action, dispatch));
            }
            return bindActionCreators(actions as any, dispatch);
        }
    , deps.length ? [dispatch, ...deps] : [dispatch]);
}
