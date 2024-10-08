import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";
import * as classes from "./classes.module.scss";
import { useAppDispatch } from "@/app/appStore";
import { addFavorite } from "@/shared/ui/Favorites/model/favoritesSlice";
import { MovieForSlice } from "@/features/movie/MovieDetails/interface";
import { useNavigate } from "react-router-dom";

interface Props {
  data: {
    kinopoiskId: number;
    nameOriginal: string;
    nameRu: string;
    coverUrl: string;
    webUrl: string;
    description: string;
  };
}

const MovieButtons = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const dispatch = useAppDispatch();

  const handleAddToFavorites = (movie: MovieForSlice) => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className={classes.icons}>
      <Plus
        className={classes.svg}
        onClick={() =>
          handleAddToFavorites({
            id: data.kinopoiskId,
            title: data.nameOriginal || data.nameRu,
            coverUrl: data.coverUrl,
          })
        }
      />
      <Like
        className={classes.svg}
        onClick={() => handleClick(data.kinopoiskId)}
      />
      <Volume className={classes.svg} />
    </div>
  );
};

export default MovieButtons;
