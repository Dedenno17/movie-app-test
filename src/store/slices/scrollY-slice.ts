import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface InitialState {
  value: number | any | undefined;
}

const initialStateValue: InitialState = { value: 0 };

const scrollYSlice = createSlice({
  name: 'scrollY',
  initialState: initialStateValue,
  reducers: {
    setScrollY: (state, action: PayloadAction<number | any | undefined>) => {
      state.value = action.payload;
    },
  },
});

export const scrollYActions = scrollYSlice.actions;
export const selectscrollY = (state: RootState) => state.scrollY.value;
export default scrollYSlice.reducer;
