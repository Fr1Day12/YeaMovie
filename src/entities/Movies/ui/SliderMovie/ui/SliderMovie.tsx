import * as classes from "./classes.module.scss";
import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";
import Play from "@/shared/assets/svg/play.svg";
import Button from "@/shared/ui/button/ui/Button";
import { useGetFilmsByIdQuery } from "@/entities/Movies/model/Api/kinopoiskApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/appStore";
import { addFavorite } from "@/features/Favorites/Slice/favoritesSlice";
import SliderNavigation from "@/shared/ui/SliderNavigation/ui/SliderNavigation";
import { MovieForSlice } from "@/shared/interfaces";

const ids = [843650, 843649, 679830, 263531];
const SliderMovie = () => {
  const data = ids.map((id) => useGetFilmsByIdQuery(id));
  const loading = data.some((result) => result.isLoading);

  const dispatch = useAppDispatch();

  const handleAddToFavorites = (movie: MovieForSlice) => {
    dispatch(addFavorite(movie));
  };

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ids.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ids.length) % ids.length);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentMovie = data[currentIndex];

  return (
    <section className={classes.container}>
      <div className={classes.box}>
        {currentMovie && (
          <div className={classes.slide}>
            <img
              className={classes.image}
              src={currentMovie.data.coverUrl}
              alt={currentMovie.data.nameOriginal || currentMovie.data.nameRu}
            />
            <div className={classes.content}>
              <h2 className={classes.title}>
                {currentMovie.data.nameOriginal || currentMovie.data.nameRu}
              </h2>
              <p style={{ height: "48px", overflow: "hidden" }}>
                {currentMovie.data.description}
              </p>
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
                <div className={classes.icons}>
                  <Plus
                    className={classes.svg}
                    onClick={() =>
                      handleAddToFavorites({
                        id: currentMovie.data.kinopoiskId,
                        title:
                          currentMovie.data.nameOriginal ||
                          currentMovie.data.nameRu,
                        coverUrl: currentMovie.data.coverUrl,
                      })
                    }
                  />
                  <Like
                    className={classes.svg}
                    onClick={() => handleClick(currentMovie.data.kinopoiskId)}
                  />
                  <Volume className={classes.svg} />
                </div>
              </div>

              <div className={classes.buttonContainer}>
                <div className={classes.containerSvg}>
                  <SliderNavigation
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    currentIndex={currentIndex}
                    border={false}
                    className={classes.sliderNav}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderMovie;
