import {
  useGetFilmsByTypeQuery,
  useGetFilmsTopQuery,
} from "@/entities/Movies/model/Api/kinopoiskApi";

const useMovieQuery = () => {
  const responceAction = useGetFilmsByTypeQuery({ genre: 11, page: 1 });
  const responceComedy = useGetFilmsByTypeQuery({ genre: 19, page: 1 });
  const responceHorror = useGetFilmsByTypeQuery({ genre: 17, page: 1 });
  const responceCartoon = useGetFilmsByTypeQuery({ genre: 18, page: 1 });
  const responceMusical = useGetFilmsByTypeQuery({ genre: 16, page: 1 });
  const responceMystery = useGetFilmsByTypeQuery({ genre: 12, page: 1 });
  const responceHistory = useGetFilmsByTypeQuery({ genre: 15, page: 1 });
  const responceDrama = useGetFilmsByTypeQuery({ genre: 2, page: 1 });

  //Нужно переделать, выглядит как фигня, много повторяющегося кода

  // TOP_250_MOVIES
  const responceTopMovies1 = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: 1,
  });

  const responceTopMovies2 = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: 2,
  });

  const responceTopMovies3 = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: 3,
  });

  const responceTopMovies4 = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: 4,
  });

  const responceTopMovies5 = useGetFilmsTopQuery({
    type: "TOP_250_MOVIES",
    page: 5,
  });

  // TOP_250_TV_SHOWS

  const responceTopShows1 = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: 1,
  });

  const responceTopShows2 = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: 2,
  });

  const responceTopShows3 = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: 3,
  });

  const responceTopShows4 = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: 4,
  });

  const responceTopShows5 = useGetFilmsTopQuery({
    type: "TOP_250_TV_SHOWS",
    page: 5,
  });

  const isLoading =
    responceAction.isLoading ||
    responceComedy.isLoading ||
    responceHorror.isLoading ||
    responceCartoon.isLoading ||
    responceMusical.isLoading ||
    responceMystery.isLoading ||
    responceHistory.isLoading ||
    responceDrama.isLoading;

  const hasError =
    responceAction.error ||
    responceComedy.error ||
    responceHorror.error ||
    responceCartoon.error ||
    responceMusical.error ||
    responceMystery.error ||
    responceHistory.error ||
    responceDrama.error;

  return {
    isLoading,
    hasError,
    responceAction,
    responceComedy,
    responceHorror,
    responceCartoon,
    responceMusical,
    responceMystery,
    responceHistory,
    responceDrama,
  };
};

export default useMovieQuery;
