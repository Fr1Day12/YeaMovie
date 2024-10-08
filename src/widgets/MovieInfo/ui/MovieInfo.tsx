import MovieDescription from "@/widgets/MovieInfo/ui/MovieDescription/ui/MovieDescription";
import MovieDetails from "@/features/movie/MovieDetails/ui/MovieDetails";
import CastSlider from "@/features/staff/CastSlider/ui/CastSlider";
import {
  useGetFilmReviewsQuery,
  useGetFilmsByIdQuery,
  useGetFilmStaffQuery,
} from "@/shared/Api/kinopoiskApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Review } from "@/shared/interfaces";
import { ReviewList } from "@/features/review";
import * as classes from "./classes.module.scss";
import DetailedInfoMovie from "@/widgets/MovieInfo/ui/DetailedInfoMovie/ui/DetailedInfoMovie";

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

        <DetailedInfoMovie
          movieData={movieData}
          staff={staff}
          isLoadingStaff={isLoadingStaff}
        />
      </div>
    </>
  );
};

export default MovieInfo;
