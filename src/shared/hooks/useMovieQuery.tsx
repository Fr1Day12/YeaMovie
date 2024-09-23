import { useGetFilmsByTypeQuery } from "@/features/kinopoiskApi";

const useMovieQuery = () => {
  const responceAction = useGetFilmsByTypeQuery({ genre: 11, page: 1 });
  const responceComedy = useGetFilmsByTypeQuery({ genre: 19, page: 1 });
  const responceHorror = useGetFilmsByTypeQuery({ genre: 17, page: 1 });
  const responceCartoon = useGetFilmsByTypeQuery({ genre: 18, page: 1 });
  const responceMusical = useGetFilmsByTypeQuery({ genre: 16, page: 1 });
  const responceMystery = useGetFilmsByTypeQuery({ genre: 12, page: 1 });
  const responceHistory = useGetFilmsByTypeQuery({ genre: 15, page: 1 });
  const responceDrama = useGetFilmsByTypeQuery({ genre: 2, page: 1 });

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
