import * as classes from "./classes.module.scss";
import { Rating } from "@mui/material";

const MovieRating = ({ ratingKinopoisk }: { ratingKinopoisk: number }) => {
  return (
    <div className={classes.rating}>
      <p>Kinopoisk</p>
      <Rating
        name="read-only"
        precision={0.5}
        value={ratingKinopoisk}
        readOnly
      />
    </div>
  );
};

export default MovieRating;
