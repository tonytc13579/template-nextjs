import { RootState } from '@/state';
import { TODOState } from './types';

export const getTODOReducerSelector = (state: RootState): TODOState | null =>
  state.user;
