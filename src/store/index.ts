import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// Reducers
import firstLoadReducer from './slices/firstLoad-slice';
import searchInputReducer from './slices/searchInput-slice';
import { api } from './apiCalls';

const store = configureStore({
  reducer: {
    isFirstLoad: firstLoadReducer,
    searchInput: searchInputReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
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
