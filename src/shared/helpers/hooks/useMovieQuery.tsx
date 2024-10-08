import { useGetFilmsTopQuery } from "@/shared/Api/kinopoiskApi";

const useMovieQuery = (category: string, pageNumber = 1) => {
  const type = category === "Movies" ? "TOP_250_MOVIES" : "TOP_250_TV_SHOWS";
  const response = useGetFilmsTopQuery({ type, page: pageNumber });

  const isLoading = response.isLoading;
  const hasError = response.error;

  return {
    isLoading,
    hasError,
    data: response.data,
  };
};

export default useMovieQuery;
