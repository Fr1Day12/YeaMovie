import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "@/features/filmSlice";
import { useDispatch, useSelector } from "react-redux";
import { kinopoiskApi } from "@/features/kinopoiskApi";

export const store = configureStore({
  reducer: {
    // filmSlice,
    // [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
