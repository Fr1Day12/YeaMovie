import * as classes from "./classes.module.scss";
import Play from "@/shared/assets/svg/play.svg";
import Button from "@/shared/ui/button/ui/Button";
import { useGetFilmsByIdQuery } from "@/shared/Api/kinopoiskApi";
import { useState } from "react";
import MoviesCardSkeleton from "@/shared/ui/skeleton/ui/MoviesCardSkeleton";
import { useSwipeable } from "react-swipeable";
import PaginationWrapper from "@/widgets/SliderMovie/ui/PaginationWrapper/PaginationWrapper";
import { MovieButtons } from "@/shared/ui/MovieButtons";

const ids = [843650, 843649, 679830, 263531];

const SliderMovie = () => {
  const data = ids.map((id) => useGetFilmsByIdQuery(id));
  const loading = data.some((result) => result.isLoading);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(false);

  const handleNext = () => {
    setIsPlayingAnimation((prev) => !prev);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ids.length);
      setIsPlayingAnimation((prev) => !prev);
    }, 500);
  };

  const handlePrev = () => {
    setIsPlayingAnimation((prev) => !prev);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + ids.length) % ids.length);
      setIsPlayingAnimation((prev) => !prev);
    }, 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  if (loading) {
    return (
      <MoviesCardSkeleton
        width={1594}
        height={835}
        marginTop={6}
        itemsPerPage={1}
      />
    );
  }

  const currentMovie = data[currentIndex];

  return (
    <section className={classes.container} {...handlers}>
      <div className={classes.box}>
        {currentMovie && (
          <div
            className={`${classes.slide} ${
              isPlayingAnimation ? classes.slideActive : ""
            }`}>
            <img
              className={classes.image}
              src={currentMovie.data.coverUrl}
              alt={currentMovie.data.nameOriginal || currentMovie.data.nameRu}
            />
            <div className={classes.content}>
              <h2 className={classes.title}>
                {currentMovie.data.nameOriginal || currentMovie.data.nameRu}
              </h2>
              <p className={classes.text}>{currentMovie.data.description}</p>
              <div className={classes.buttons}>
                <div className={classes.buttonContainer}>
                  <Button
                    text={"Play Now"}
                    onClick={() =>
                      window.open(currentMovie.data.webUrl, "_blank")
                    }
                    className={classes.button}>
                    <Play />
                  </Button>
                </div>

                <MovieButtons data={currentMovie.data} />
              </div>

              <PaginationWrapper
                handlePrev={handlePrev}
                handleNext={handleNext}
                currentIndex={currentIndex}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderMovie;
