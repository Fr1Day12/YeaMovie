import {
  useGetFilmReviewsQuery,
  useGetFilmsByIdQuery,
  useGetFilmStaffQuery,
} from "@/entities/Movies/model/Api/kinopoiskApi";
import * as classes from "./classes.module.scss";
import { useParams } from "react-router-dom";
import MovieDetails from "@/entities/Movies/ui/MovieInfo/ui/MovieDetails/ui/MovieDetails";
import CastSlider from "@/entities/Movies/ui/MovieInfo/ui/CastSlider/ui/CastSlider";
import Calendar from "@/shared/assets/svg/calendar.svg";
import Language from "@/shared/assets/svg/language.svg";
import Star from "@/shared/assets/svg/star.svg";
import { Rating } from "@mui/material";
import Genres from "@/shared/assets/svg/genres.svg";
import Image from "@/shared/ui/image/ui/Image";
import ReviewList from "@/widgets/Reviews/ui/ReviewList/ui/ReviewList";
import { useEffect, useState } from "react";
import { Review } from "@/shared/interfaces";
import MovieDescription from "@/entities/Movies/ui/MovieInfo/ui/MovieDescription/ui/MovieDescription";

/* Разделить на компоненты и убрать инлайн стили*/

const MovieInfo = () => {
  const { id } = useParams();

  const [reviewsArray, setReviewsArray] = useState<Review[]>([]);

  const { data: reviews, isLoading: isLoadingReviews } =
    useGetFilmReviewsQuery(id);
  const { data: staff, isLoading: isLoadingStaff } = useGetFilmStaffQuery(id);
  const { data: movieData } = useGetFilmsByIdQuery(id);

  useEffect(() => {
    if (!isLoadingReviews && reviews) {
      setReviewsArray(reviews.items);
    }
  }, [reviews, isLoadingReviews]);

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
    <>
      <MovieDetails {...movieData} />

      <div className={classes.container}>
        <MovieDescription description={movieData.description} />
        <CastSlider {...{ staff, isLoadingStaff }} />

        {isLoadingReviews || reviews === undefined ? (
          <div>Loading...</div>
        ) : (
          <ReviewList
            reviews={reviewsArray}
            isLoadingReviews={isLoadingReviews}
            setReviewsArray={setReviewsArray}
          />
        )}

        <div className={classes.info}>
          <div className={classes.block}>
            <Calendar className={classes.svg} />
            <p style={{ margin: "0" }}>Reliased Year </p>
          </div>
          <p style={{ margin: "14px 0 30px 0" }}>{movieData.year}</p>

          <div className={classes.block}>
            <Language className={classes.svg} />
            <p>Available Languages</p>
          </div>
          {movieData.countries.map((language: { country: string }) => {
            return (
              <div className={classes.lang} key={language.country}>
                {language.country}
              </div>
            );
          })}

          <div className={classes.block}>
            <Star className={classes.svg} />
            <p style={{ margin: "0" }}>Rating</p>
          </div>
          <div className={classes.rating}>
            <p style={{ margin: "4px" }}>Kinopoisk</p>
            <Rating
              name="read-only"
              precision={0.5}
              value={movieData.ratingKinopoisk}
              readOnly
            />
          </div>

          <div className={classes.block}>
            <Genres className={classes.svg} />
            Genres
          </div>
          {movieData.genres.map((genre: { genre: string }) => {
            return (
              <div key={genre.genre} className={classes.genre}>
                {genre.genre}
              </div>
            );
          })}

          <div>
            {!isLoadingStaff && (
              <>
                <p style={{ marginBottom: "14px" }}>Director</p>

                <Image
                  src={staff[0].posterUrl}
                  alt={staff[0].nameRu}
                  name={staff[0].nameRu}
                />

                <p style={{ marginBottom: "14px" }}>Producer</p>

                <Image
                  src={staff[1].posterUrl}
                  alt={staff[1].nameRu}
                  name={staff[1].nameRu}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
