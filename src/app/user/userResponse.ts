export interface UserResponse {
  message: string;
  user: {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    name: string;
    first_name: string;
    active: boolean;
    role_id: number;
  };
  role: {
    active: boolean;
    id: number;
    title: string;
  };
}
