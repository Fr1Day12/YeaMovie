import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
var kinopoiskApiKey = process.env.API_KEY;
var kinopoiskApiBaseUrl = process.env.BASE_API_URL;
export var kinopoiskApi = createApi({
    reducerPath: "kinopoiskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: kinopoiskApiBaseUrl,
        prepareHeaders: function (headers) {
            headers.set("X-API-KEY", kinopoiskApiKey);
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: function (builder) { return ({
        getFilmsByType: builder.query({
            query: function (_a) {
                var genre = _a.genre, page = _a.page;
                return "/v2.2/films?genres=".concat(genre, "&order=RATING&type=FILM&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=").concat(page);
            },
        }),
    }); },
});
export var useGetFilmsByTypeQuery = kinopoiskApi.useGetFilmsByTypeQuery;
