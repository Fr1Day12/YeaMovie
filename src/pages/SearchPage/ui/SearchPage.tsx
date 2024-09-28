import { useParams } from "react-router-dom";
import * as classes from "./classes.module.scss";
import { useGetSearchMovieQuery } from "@/entities/Movies/ui/SearchMovie/api/searchMovieApi";
import Header from "@/widgets/Header/ui/Header";
import MovieInfo from "@/entities/Movies/ui/MovieInfo/ui/MovieInfo";

function SearchPage() {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetSearchMovieQuery(keyword || "");

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className={classes.container}>
      <Header />
      <MovieInfo />
    </div>
  );
}

export default SearchPage;
