import * as classes from "./classes.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Сarousel from "@/features/Сarousel/ui/Сarousel";
import { filmsCategory } from "@/shared/constants";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Arrow from "@/shared/assets/svg/arrow.svg";
import Line from "@/shared/assets/svg/line.svg";

interface Props {
  text?: string;
  title: string;
  width?: number;
}

const Categories = ({ text, title, width }: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prev) =>
        prev === 0 ? filmsCategory.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prev) =>
        prev === filmsCategory.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section
      className={width ? ` ${classes.containerWidth}` : classes.container}>
      <div className={classes.box}>
        <div className={classes.containerText}>
          <h2 className={classes.title}>{title}</h2>
          {text && <p className={classes.text}>{text}</p>}
        </div>

        <div className={classes.containerSvg}>
          <div className={classes.arrow} onClick={handlePrev}>
            <Arrow transform="rotate(180)" />
          </div>
          <div className={classes.line}>
            {Array.from({ length: 4 }, (_, index) => (
              <Line
                key={index}
                className={currentSlide % 4 === index ? classes.lineActive : ""}
              />
            ))}
          </div>
          <div className={classes.arrow} onClick={handleNext}>
            <Arrow />
          </div>
        </div>
      </div>

      <Сarousel sliderRef={sliderRef} />
    </section>
  );
};

export default Categories;
