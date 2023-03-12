import { UserResponse } from './../../user/userResponse';
export interface UserStateInterface {
    isLoading: boolean;
    user: UserResponse | null;
    error: string | null;
    token: string | null;
}