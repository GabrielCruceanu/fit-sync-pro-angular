import { User } from '@app/core/user/user.types';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
  passwordMessage: string | null;
}
