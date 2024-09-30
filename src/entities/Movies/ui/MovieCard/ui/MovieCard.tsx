import Arrow from "@/shared/assets/svg/arrow.svg";
import * as classes from "./classes.module.scss";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  kinopoiskId: number;
  posterUrl?: string;
  nameRu?: string;
  nameEn?: string;
  onClick?: () => void;
}

const MovieCard = ({
  kinopoiskId,
  posterUrl,
  nameRu,
  nameEn,
  onClick,
}: Props) => {
  return (
    <Stack key={kinopoiskId} className={classes.card} onClick={onClick}>
      <Link to={`/movie/${kinopoiskId}`}>
        <img src={posterUrl} alt={nameRu} className={classes.image} />
      </Link>
      <Typography className={classes.text}>
        {nameRu || nameEn}
        <Arrow width={30} height={30} />
      </Typography>
    </Stack>
  );
};

export default MovieCard;
