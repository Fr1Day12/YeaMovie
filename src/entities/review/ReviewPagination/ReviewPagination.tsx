import * as classes from "./classes.module.scss";
import ArrowRight from "@/shared/assets/svg/arrowRight.svg";
import ArrowLeft from "@/shared/assets/svg/arrowLeft.svg";
import Line from "@/shared/assets/svg/line.svg";

interface Props {
  goToPrevSlide: () => void;
  goToNextSlide: () => void;
  currentIndex: number;
  totalPages: number;
}

const ReviewPagination = ({
  goToPrevSlide,
  goToNextSlide,
  currentIndex,
  totalPages,
}: Props) => {
  return (
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
  );
};

export default ReviewPagination;
