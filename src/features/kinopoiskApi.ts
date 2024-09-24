import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Film } from "@/shared/interfaces";

const kinopoiskApiKey = process.env.API_KEY;
const kinopoiskApiBaseUrl = process.env.BASE_API_URL;

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: kinopoiskApiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", kinopoiskApiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmsByType: builder.query<Film[], { genre: number; page: number }>({
      query: ({ genre, page }) =>
        `/v2.2/films?genres=${genre}&order=RATING&type=FILM&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
    }),
  }),
});

export const { useGetFilmsByTypeQuery } = kinopoiskApi;
