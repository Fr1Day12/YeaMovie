import {
  useGetFilmReviewsQuery,
  useGetFilmsByIdQuery,
  useGetFilmStaffQuery,
} from "@/entities/Movies/model/Api/kinopoiskApi";
import * as classes from "./classes.module.scss";
import { useParams } from "react-router-dom";
import Button from "@/shared/ui/button/ui/Button";
import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";
import Play from "@/shared/assets/svg/play.svg";

const MovieInfo = () => {
  const { id } = useParams();

  const {
    data: reviews,
    isLoading: isLoadingReviews,
    error: errorReviews,
  } = useGetFilmReviewsQuery(id);
  const {
    data: staff,
    isLoading: isLoadingStaff,
    error: errorStaff,
  } = useGetFilmStaffQuery(id);
  const {
    data: movieData,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useGetFilmsByIdQuery(id);

  if (movieData) console.log("movieData", movieData);
  if (reviews) console.log("reviews", reviews);
  if (staff) console.log("staff", staff);

  if (!movieData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <img src={movieData.posterUrl} alt="Poster" className={classes.image} />
        <h2 className={classes.title}>{movieData.nameRu}</h2>
        <p className={classes.text}>{movieData.shortDescription}</p>

        <div className={classes.buttons}>
          <div className={classes.buttonContainer}>
            <Button text={"Play Now"} className={classes.button} active={false}>
              <Play />
            </Button>
          </div>
          <div className={classes.icons}>
            <Plus className={classes.svg} />
            <Like className={classes.svg} />
            <Volume className={classes.svg} />
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.description}></div>
        <div className={classes.cast}></div>
        <div className={classes.reviews}></div>
        <div className={classes.info}></div>
      </div>
    </div>
  );
};

export default MovieInfo;
