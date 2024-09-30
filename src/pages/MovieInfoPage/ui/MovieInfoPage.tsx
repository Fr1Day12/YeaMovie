import * as classes from "./classes.module.scss";
import Header from "@/widgets/Header/ui/Header";
import MovieInfo from "@/entities/Movies/ui/MovieInfo/ui/MovieInfo";

function MovieInfoPage() {
  return (
    <div className={classes.container}>
      <Header />
      <MovieInfo />
    </div>
  );
}

export default MovieInfoPage;
