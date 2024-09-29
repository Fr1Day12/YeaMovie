import { useAppDispatch, useAppSelector } from "@/app/appStore";
import * as classes from "./classes.module.scss";
import { removeFavorite } from "@/features/Favorites/Slice/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { MovieForSlice } from "@/shared/interfaces";

const Favorites = ({ handleClose }: { handleClose: () => void }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state: any) => state.favorites.favorites);
  const navigate = useNavigate();

  const favoritePage = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleRemove = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(removeFavorite(id));
  };

  return (
    <div className={classes.overlay} onClick={handleClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={classes.title}>Избранные фильмы</h2>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((film: MovieForSlice) => (
              <li key={film.id} className={classes.list}>
                {film.title}
                <img
                  src={film.coverUrl}
                  alt={film.title}
                  className={classes.image}
                  onClick={() => favoritePage(film.id)}
                />
                <button
                  onClick={(event) => handleRemove(film.id, event)}
                  className={classes.button}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={classes.title}>Нет избранных фильмов.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
