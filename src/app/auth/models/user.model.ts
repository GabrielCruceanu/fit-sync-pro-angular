export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status?: string;
}

export type UserType = 'admin' | 'client' | 'trainer' | 'nutritionist' | 'gym';
