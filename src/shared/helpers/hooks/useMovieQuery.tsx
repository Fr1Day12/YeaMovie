import { useGetFilmsTopQuery } from "@/entities/Movies/model/Api/kinopoiskApi";

const useMovieQuery = (pageNumber = 1) => {
  // const responceAction = useGetFilmsByTypeQuery({ genre: 11, page: 1 });
  // const responceComedy = useGetFilmsByTypeQuery({ genre: 19, page: 1 });
  // const responceHorror = useGetFilmsByTypeQuery({ genre: 17, page: 1 });
  // const responceCartoon = useGetFilmsByTypeQuery({ genre: 18, page: 1 });
  // const responceMusical = useGetFilmsByTypeQuery({ genre: 16, page: 1 });
  // const responceMystery = useGetFilmsByTypeQuery({ genre: 12, page: 1 });
  // const responceHistory = useGetFilmsByTypeQuery({ genre: 15, page: 1 });
  // const responceDrama = useGetFilmsByTypeQuery({ genre: 2, page: 1 });

  const responseTopMovies = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: pageNumber,
  });
  const responseTopShows = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: pageNumber,
  });

  const isLoading = responseTopMovies.isLoading || responseTopShows.isLoading;
  const hasError = responseTopMovies.error || responseTopShows.error;

  return {
    isLoading,
    hasError,
    responceTopMovies: responseTopMovies.data,
    responceTopShows: responseTopShows.data,
  };
};

export default useMovieQuery;
