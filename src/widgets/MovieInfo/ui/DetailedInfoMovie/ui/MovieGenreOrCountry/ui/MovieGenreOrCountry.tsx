import * as classes from "./classes.module.scss";

interface Props {
  genre?: string;
  language?: string;
}

const MovieGenreOrCountry = ({ genre, language }: Props) => {
  return (
    <div className={`${genre ? classes.genre : classes.lang}`}>
      {genre ? genre : language}
    </div>
  );
};

export default MovieGenreOrCountry;
