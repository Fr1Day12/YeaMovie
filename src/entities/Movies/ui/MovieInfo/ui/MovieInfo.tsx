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
import MovieInfoBlock from "@/entities/Movies/ui/MovieInfo/ui/MovieInfoBlock/ui/MovieInfoBlock";

const InfoBlock = ({ icon: Icon, title, children }) => (
  <div className={classes.block}>
    <Icon className={classes.svg} />
    <p>{title}</p>
    {children}
  </div>
);

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
    return <div className={classes.loading}>Loading...</div>;
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
          <MovieInfoBlock icon={Calendar} title="Released Year">
            <p className={classes.year}>{movieData.year}</p>
          </MovieInfoBlock>
          <MovieInfoBlock icon={Language} title="Available Languages">
            {movieData.countries.map((language: { country: string }) => (
              <div className={classes.lang} key={language.country}>
                {language.country}
              </div>
            ))}
          </MovieInfoBlock>
          <MovieInfoBlock icon={Star} title="Rating">
            <div className={classes.rating}>
              <p>Kinopoisk</p>
              <Rating
                name="read-only"
                precision={0.5}
                value={movieData.ratingKinopoisk}
                readOnly
              />
            </div>
          </MovieInfoBlock>
          <MovieInfoBlock icon={Genres} title="Genres">
            {movieData.genres.map((genre: { genre: string }) => (
              <div key={genre.genre} className={classes.genre}>
                {genre.genre}
              </div>
            ))}
          </MovieInfoBlock>
          {!isLoadingStaff && staff.length > 1 && (
            <>
              <p>Director</p>
              <Image
                src={staff[0].posterUrl}
                alt={staff[0].nameRu}
                name={staff[0].nameRu}
              />
              <p>Producer</p>
              <Image
                src={staff[1].posterUrl}
                alt={staff[1].nameRu}
                name={staff[1].nameRu}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
