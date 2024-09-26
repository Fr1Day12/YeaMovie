import { ISearch } from "@/entities/Movies/ui/SearchMovie/model/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const kinopoiskApiKey = process.env.API_KEY;
const kinopoiskApiBaseUrl = process.env.BASE_API_URL;

export const searchMovieApi = createApi({
  reducerPath: "searchMovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: kinopoiskApiBaseUrl,
  }),
  endpoints: (builder) => ({
    getSearchMovie: builder.query<ISearch, string>({
      query: (keyword) => {
        return {
          url: `/search-by-keyword`,
          headers: {
            accept: "application/json",
            "X-API-KEY": kinopoiskApiKey,
          },
          params: {
            keyword,
            page: 1,
          },
        };
      },
    }),
  }),
});

export const { useGetSearchMovieQuery } = searchMovieApi;
