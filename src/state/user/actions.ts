import { CaseReducer, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PREFIX, UserState } from './types';

const setTokens: CaseReducer<UserState, PayloadAction<any[]>> = (state, action) => {
  state.data = action.payload;
};

const fetchToken = createAsyncThunk(`${PREFIX}/fetchToken`, async () => {});

const actionCreators = {
  setTokens,
};

// Export Pure Actions
export { actionCreators };

// Export Async Actions
export { fetchToken };
