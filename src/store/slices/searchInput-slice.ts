import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface InitialState {
  value: string;
}

const initialStateValue: InitialState = {
  value: '',
};

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: initialStateValue,
  reducers: {
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchInputValue } = searchInputSlice.actions;
export const SelectSearchInput = (state: RootState) => state.searchInput.value;
export default searchInputSlice.reducer;
