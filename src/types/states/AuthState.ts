import { RequestStatus } from '../../constants/RequestStatus';

export interface AuthState {
    status: RequestStatus;
    error: string;
}
