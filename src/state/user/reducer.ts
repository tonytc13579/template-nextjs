import { createSlice } from '@reduxjs/toolkit';
import { UserState, PREFIX } from './types';
import { actionCreators, fetchToken } from './actions';

export const initialState: UserState = {};

const slice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    ...actionCreators,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {})
      .addCase(fetchToken.fulfilled, (state, action) => {})
      .addCase(fetchToken.rejected, (state, action) => {});
  },
});

export const { setTokens } = slice.actions;

export default slice.reducer;
