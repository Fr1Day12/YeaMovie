import useMovieQuery from "@/shared/helpers/hooks/useMovieQuery";
import * as classes from "./classes.module.scss";
import MovieCard from "@/entities/Movies/ui/MovieCard/ui/MovieCard";
import Slider from "@/shared/ui/Slider/ui/Slider";
import { useNavigate } from "react-router-dom";
import { movieSection, showsSection } from "@/shared/constants";
import { FilmData } from "@/shared/interfaces";
import MoviesCardSkeleton from "@/shared/ui/skeleton/ui/MoviesCardSkeleton";

interface Props {
  Category: string;
}

const MoviesCategory = ({ Category }: Props) => {
  const dataToUse = Category === "Movies" ? movieSection : showsSection;
  const movieData = dataToUse.map(({ id }) => useMovieQuery(Category, id));
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/Movies:${id}`);
  };

  return (
    <section className={classes.container}>
      <div className={classes.buttonContainer}>
        <div className={classes.block}>{Category}</div>
        {movieSection.map((item, index) => {
          const { isLoading, data } = movieData[index];

          if (isLoading) {
            return <MoviesCardSkeleton />;
          }

          return (
            <div key={item.id}>
              <Slider items={data.items} title={item.title}>
                {data.items.map((movie: FilmData) => (
                  <div key={movie.kinopoiskId}>
                    <MovieCard
                      {...movie}
                      onClick={() => handleClick(movie.kinopoiskId)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoviesCategory;
