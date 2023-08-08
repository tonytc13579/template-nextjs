import { RootState } from '@/state';
import { UserState } from './types';

export const getUserSelector = (state: RootState): UserState | null => state.user;
