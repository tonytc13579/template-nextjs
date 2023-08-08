import { createSlice } from '@reduxjs/toolkit';
import { actionCreators, asyncFunc } from './actions';
import { PREFIX, TODOState } from './types';

export const initialState: TODOState = {};

const slice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    ...actionCreators,
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFunc.pending, (state) => {})
      .addCase(asyncFunc.fulfilled, (state, action) => {})
      .addCase(asyncFunc.rejected, (state, action) => {});
  },
});

export const { pureFunc } = slice.actions;

export default slice.reducer;
