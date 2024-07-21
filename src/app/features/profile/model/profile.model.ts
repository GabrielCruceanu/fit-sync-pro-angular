export type ProfileType = 'client' | 'trainer' | 'nutritionist' | 'gym';

export interface Profile {
  id: string;
  type: ProfileType;
}
