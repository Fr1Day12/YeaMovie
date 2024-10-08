import { MovieInfo } from "@/widgets/MovieInfo";
import * as classes from "./classes.module.scss";
import Header from "@/widgets/Header/ui/Header";

function MovieInfoPage() {
  return (
    <div className={classes.container}>
      <Header />
      <MovieInfo />
    </div>
  );
}

export default MovieInfoPage;
