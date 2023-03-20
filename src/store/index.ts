import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// Reducers
import firstLoadReducer from './slices/firstLoad-slice';

const store = configureStore({
  reducer: {
    isFirstLoad: firstLoadReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
