import { useParams } from "react-router-dom";
import * as classes from "./classes.module.scss";
import { useGetSearchMovieQuery } from "@/entities/Movies/ui/SearchMovie/api/searchMovieApi";

function SearchPage() {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetSearchMovieQuery(keyword || "");

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Результаты поиска</h1>
      </div>
    </div>
  );
}

export default SearchPage;
