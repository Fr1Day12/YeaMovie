import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { kinopoiskApi } from "@/shared/Api/kinopoiskApi";
import { searchMovieApi } from "@/features/movie/SearchMovie/api/searchMovieApi";
import { searchQuerySlice } from "@/features/movie/SearchMovie/model/searchQuerySlice";
import favoritesSlice from "@/shared/ui/Favorites/model/favoritesSlice";

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    [searchMovieApi.reducerPath]: searchMovieApi.reducer,
    searchQuerySlice: searchQuerySlice.reducer,
    favorites: favoritesSlice,
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
