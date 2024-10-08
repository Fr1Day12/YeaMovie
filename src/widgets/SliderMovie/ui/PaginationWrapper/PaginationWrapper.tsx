import SliderNavigation from "@/shared/ui/Slider/ui/SliderNavigation/ui/SliderNavigation";
import * as classes from "./classes.module.scss";

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  currentIndex: number;
}

const PaginationWrapper = ({ handlePrev, handleNext, currentIndex }: Props) => {
  return (
    <div className={classes.buttonContainer}>
      <div className={classes.containerSvg}>
        <SliderNavigation
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentIndex={currentIndex}
          border={false}
          className={classes.sliderNav}
        />
      </div>
    </div>
  );
};

export default PaginationWrapper;
