import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";
import Play from "@/shared/assets/svg/play.svg";
import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";
import { useAppDispatch } from "@/app/appStore";
import { addFavorite } from "@/features/Favorites/Slice/favoritesSlice";
import { MovieForSlice } from "@/shared/interfaces";

interface Props {
  nameRu: string;
  posterUrl: string;
  shortDescription: string;
  webUrl: string;
  id: number;
}

const MovieDetails = ({
  nameRu,
  posterUrl,
  shortDescription,
  webUrl,
  id,
}: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (movie: MovieForSlice) => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className={classes.wrapper}>
      <img src={posterUrl} alt="Poster" className={classes.image} />
      <h2 className={classes.title}>{nameRu}</h2>
      <p className={classes.text}>{shortDescription}</p>

      <div className={classes.buttons}>
        <div className={classes.buttonContainer}>
          <Button
            text={"Play Now"}
            className={classes.button}
            onClick={() => window.open(webUrl, "_blank")}>
            <Play />
          </Button>
        </div>
        <div className={classes.icons}>
          <Plus
            className={classes.svg}
            onClick={() =>
              handleAddToFavorites({
                id: id,
                title: nameRu,
                coverUrl: posterUrl,
              })
            }
          />
          <Like className={classes.svg} />
          <Volume className={classes.svg} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
