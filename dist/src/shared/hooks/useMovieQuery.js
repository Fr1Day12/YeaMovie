import { useGetFilmsByTypeQuery } from "@/features/kinopoiskApi";
var useMovieQuery = function () {
    var responceAction = useGetFilmsByTypeQuery({ genre: 11, page: 1 });
    var responceComedy = useGetFilmsByTypeQuery({ genre: 19, page: 1 });
    var responceHorror = useGetFilmsByTypeQuery({ genre: 17, page: 1 });
    var responceCartoon = useGetFilmsByTypeQuery({ genre: 18, page: 1 });
    var responceMusical = useGetFilmsByTypeQuery({ genre: 16, page: 1 });
    var responceMystery = useGetFilmsByTypeQuery({ genre: 12, page: 1 });
    var responceHistory = useGetFilmsByTypeQuery({ genre: 15, page: 1 });
    var responceDrama = useGetFilmsByTypeQuery({ genre: 2, page: 1 });
    var isLoading = responceAction.isLoading ||
        responceComedy.isLoading ||
        responceHorror.isLoading ||
        responceCartoon.isLoading ||
        responceMusical.isLoading ||
        responceMystery.isLoading ||
        responceHistory.isLoading ||
        responceDrama.isLoading;
    var hasError = responceAction.error ||
        responceComedy.error ||
        responceHorror.error ||
        responceCartoon.error ||
        responceMusical.error ||
        responceMystery.error ||
        responceHistory.error ||
        responceDrama.error;
    return {
        isLoading: isLoading,
        hasError: hasError,
        responceAction: responceAction,
        responceComedy: responceComedy,
        responceHorror: responceHorror,
        responceCartoon: responceCartoon,
        responceMusical: responceMusical,
        responceMystery: responceMystery,
        responceHistory: responceHistory,
        responceDrama: responceDrama,
    };
};
export default useMovieQuery;
