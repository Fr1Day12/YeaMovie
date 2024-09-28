import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { kinopoiskApi } from "@/entities/Movies/model/Api/kinopoiskApi";
import filmSlice from "@/entities/Movies/model/Slice/filmSlice";
import { searchMovieApi } from "@/entities/Movies/ui/SearchMovie/api/searchMovieApi";
import { searchQuerySlice } from "@/entities/Movies/ui/SearchMovie/model/searchQuerySlice";

export const store = configureStore({
  reducer: {
    filmSlice,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    [searchMovieApi.reducerPath]: searchMovieApi.reducer,
    searchQuerySlice: searchQuerySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(kinopoiskApi.middleware)
      .concat(searchMovieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
