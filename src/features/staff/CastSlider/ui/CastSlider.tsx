import * as classes from "./classes.module.scss";
import { useState } from "react";
import ArrowRight from "@/shared/assets/svg/arrowRight.svg";
import ArrowLeft from "@/shared/assets/svg/arrowLeft.svg";
import { useMediaQuery } from "react-responsive";
import { Staff } from "@/features/staff/CastSlider/interface";

interface Props {
  isLoadingStaff: boolean;
  staff: Staff[];
}

const CastSlider = ({ staff, isLoadingStaff }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 871px)" });

  const itemsPerSlide = isMobile ? 4 : 8;
  const totalSlides =
    !isLoadingStaff && Math.ceil(staff.length / itemsPerSlide);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={classes.cast}>
      <div className={classes.castContainer}>
        <p className={classes.infoTitle}>Cast</p>
        <ArrowLeft className={classes.arrowSvg} onClick={prevSlide} />
        <ArrowRight className={classes.arrowSvg} onClick={nextSlide} />
      </div>
      <div className={classes.staff}>
        {isLoadingStaff ? (
          <div>Loading...</div>
        ) : (
          staff
            .slice(
              activeSlide * itemsPerSlide,
              (activeSlide + 1) * itemsPerSlide
            )
            .map((actor: Staff, index) => (
              <img
                key={index}
                src={actor.posterUrl}
                alt={actor.nameRu}
                className={classes.staffImg}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default CastSlider;
