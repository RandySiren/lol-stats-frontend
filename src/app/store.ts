import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import centralApi from "../lib/api/centralApi";

export const store = configureStore({
  reducer: {
    [centralApi.reducerPath]: centralApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(centralApi.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
