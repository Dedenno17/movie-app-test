import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface InitialState {
  value: number | undefined;
}

const initialStateValue: InitialState = { value: 0 };

const screenWidthSlice = createSlice({
  name: 'screenWidth',
  initialState: initialStateValue,
  reducers: {
    setScreenWidth: (state, action: PayloadAction<number | undefined>) => {
      state.value = action.payload;
    },
  },
});

export const screenWidthActions = screenWidthSlice.actions;
export const selectscreenWidth = (state: RootState) => state.screenWidth.value;
export default screenWidthSlice.reducer;
