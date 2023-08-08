import { CaseReducer, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PREFIX, TODOState } from './types';

const pureFunc: CaseReducer<TODOState, PayloadAction<any[]>> = (state, action) => {
  state.data = action.payload;
};

const asyncFunc = createAsyncThunk(`${PREFIX}/asyncFunc`, async () => {});

const actionCreators = {
  pureFunc,
};

// Export Pure Actions
export { actionCreators };

// Export Async Actions
export { asyncFunc };
