import { RequestStatus } from '../../constants/RequestStatus';
import { User } from '../entities/User';

export interface AuthState {
    status: RequestStatus;
    error: string;
    currentUser: User;
}
