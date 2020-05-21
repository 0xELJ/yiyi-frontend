import { RequestStatus } from '../constants/RequestStatus';

export interface AuthState {
    username: string;
    room: string;
    status: RequestStatus;
    error: string;
}
