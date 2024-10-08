import * as classes from "./classes.module.scss";
import Plus from "@/shared/assets/svg/plus.svg";
import { useState } from "react";
import { Review } from "@/shared/interfaces";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/shared/ui/button";
import ModalReview from "@/features/review/Modal/ui/ModalReview";
import { ReviewComment } from "@/entities/review";
import ReviewPagination from "@/entities/review/ReviewPagination/ReviewPagination";

interface Props {
  reviews: Review[];
  isLoadingReviews: boolean;
  setReviewsArray: (updater: (prevReviews: Review[]) => Review[]) => void;
}

const ReviewList = ({ reviews, isLoadingReviews, setReviewsArray }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 871px)" });

  const itemsPerPage = isMobile ? 1 : 2;

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalClose = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalSubmit = (newReview: Review) => {
    setReviewsArray((prevReviews: Review[]) => [...prevReviews, newReview]);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className={classes.reviews}>
      <div className={classes.reviewsContainer}>
        <p className={classes.infoTitle}>Reviews</p>
        <Button
          text={"Write a review"}
          className={classes.button}
          onClick={handleModalOpen}>
          <Plus width={30} height={30} />

          <ModalReview
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
        </Button>
      </div>
      <div className={classes.reviewsContainer}>
        {isLoadingReviews ? (
          <div>Loading...</div>
        ) : reviews === undefined ? (
          <h3>No reviews</h3>
        ) : (
          reviews
            .slice(
              currentIndex * itemsPerPage,
              (currentIndex + 1) * itemsPerPage
            )
            .map((comment, index) => (
              <ReviewComment
                key={index}
                author={comment.author}
                description={comment.description}
                type={comment.type}
              />
            ))
        )}
      </div>

      <ReviewPagination
        totalPages={totalPages}
        currentIndex={currentIndex}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    </div>
  );
};

export default ReviewList;
