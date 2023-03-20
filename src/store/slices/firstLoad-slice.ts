import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface InitialState {
  value: boolean;
}

const initialStateValue: InitialState = {
  value: true,
};

export const firstLoadSlice = createSlice({
  name: 'firstLoad',
  initialState: initialStateValue,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = firstLoadSlice.actions;
export const SelectFirstLoad = (state: RootState) => state.isFirstLoad.value;
export default firstLoadSlice.reducer;
