import { Film } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const kinopoiskApiKey = process.env.API_KEY;
const kinopoiskApiBaseUrl = process.env.BASE_API_URL;

export const searchMovieApi = createApi({
  reducerPath: "searchMovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: kinopoiskApiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", kinopoiskApiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchMovie: builder.query<Film, string>({
      query: (keyword) =>
        `/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=1`,
    }),
  }),
});

export const { useGetSearchMovieQuery } = searchMovieApi;
