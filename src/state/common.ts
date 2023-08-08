import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { WalletTransactionData } from '@/components/WrapButton/alertInfoProcessing/interface';

interface CommonState {
  needReload: number;
  currentTransaction: WalletTransactionData | undefined | null;
}

const initialState: CommonState = {
  needReload: 0,
  currentTransaction: undefined,
};

const slice = createSlice({
  name: 'commonState',
  initialState,
  reducers: {
    requestReload: state => {
      state.needReload += 1;
    },
    updateCurrentTransaction: (
      state,
      action: {
        payload: WalletTransactionData | null | undefined;
      }
    ) => {
      state.currentTransaction = action.payload;
    },
  },
});

export const { requestReload, updateCurrentTransaction } = slice.actions;

export const selectCommonReducer = (state: RootState) => state.common;
export const selectCurrentTransaction = (state: RootState) =>
  state.common.currentTransaction;

export default slice.reducer;
