import ReviewItem from "@/widgets/Reviews/ui/ReviewList/ui/RewiewItem/ui/ReviewItem";
import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";
import Plus from "@/shared/assets/svg/plus.svg";
import { useState } from "react";
import Modal from "@/widgets/Reviews/ui/modal/ui/Modal";
import { Review } from "@/shared/interfaces";
import ArrowRight from "@/shared/assets/svg/arrowRight.svg";
import ArrowLeft from "@/shared/assets/svg/arrowLeft.svg";
import Line from "@/shared/assets/svg/line.svg";

interface Props {
  reviews: Review[];
  isLoadingReviews: boolean;
  setReviewsArray: (updater: (prevReviews: Review[]) => Review[]) => void;
}

const ReviewList = ({ reviews, isLoadingReviews, setReviewsArray }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

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

          <Modal
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
              <ReviewItem
                key={index}
                author={comment.author}
                description={comment.description}
                type={comment.type}
              />
            ))
        )}
      </div>
      <div className={classes.arrowsContainer}>
        <ArrowLeft
          className={classes.arrowSvg}
          onClick={goToPrevSlide}
          style={{ marginLeft: "auto" }}
        />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Line
            key={index}
            className={`${classes.slide} ${
              index === currentIndex ? classes.active : ""
            }`}
          />
        ))}
        <ArrowRight
          className={classes.arrowSvg}
          onClick={goToNextSlide}
          style={{ marginRight: "auto" }}
        />
      </div>
    </div>
  );
};

export default ReviewList;
