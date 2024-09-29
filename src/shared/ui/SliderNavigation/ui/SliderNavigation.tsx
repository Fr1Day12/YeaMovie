import * as classes from "./classes.module.scss";
import Arrow from "@/shared/assets/svg/arrow.svg";
import Line from "@/shared/assets/svg/line.svg";
import cn from "classnames";

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  currentIndex: number;
  totalPages?: number;
  border?: boolean;
  className?: string;
}

const SliderNavigation = ({
  handlePrev,
  handleNext,
  currentIndex,
  totalPages = 4,
  border = true,
  className,
}: Props) => {
  return (
    <div
      className={
        border
          ? cn(classes.containerSvg, classes.border, className)
          : cn(classes.containerSvg, className)
      }>
      <Arrow
        transform="rotate(180)"
        className={classes.arrow}
        onClick={handlePrev}
      />
      <div className={classes.line}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Line
            key={index}
            className={currentIndex === index ? classes.lineActive : ""}
          />
        ))}
      </div>

      <Arrow className={classes.arrow} onClick={handleNext} />
    </div>
  );
};

export default SliderNavigation;
