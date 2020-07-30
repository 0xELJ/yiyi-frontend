import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types/states/RootState';

export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector;
