import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import filmSlice from "@/features/Slices/filmSlice";
import { kinopoiskApi } from "@/features/Api/kinopoiskApi";

export const store = configureStore({
  reducer: {
    filmSlice,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
