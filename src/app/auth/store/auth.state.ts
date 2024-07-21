import { User } from '@app/auth/models/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
  passwordMessage: string | null;
}
