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
    getFilmsByType: builder.query<Film, { genre: number; page: number }>({
      query: ({ genre, page }) =>
        `/v2.2/films?genres=${genre}&order=RATING&type=FILM&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
    }),

    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),

    getFilmsById: builder.query({
      query: (id) => `/v2.2/films/${id}`,
    }),

    getFilmReviews: builder.query({
      query: (id) => `/v2.2/films/${id}/reviews`,
    }),

    getFilmStaff: builder.query({
      query: (id) => `/v1/staff?filmId=${id}`,
    }),
  }),
});

export const {
  useGetFilmsByTypeQuery,
  useGetFilmsTopQuery,
  useGetFilmsByIdQuery,
  useGetFilmReviewsQuery,
  useGetFilmStaffQuery,
} = kinopoiskApi;
