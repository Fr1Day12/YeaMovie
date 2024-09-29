import * as classes from "./classes.module.scss";
import { useState } from "react";
import ArrowRight from "@/shared/assets/svg/arrowRight.svg";
import ArrowLeft from "@/shared/assets/svg/arrowLeft.svg";

type Staff = {
  nameRu: string;
  posterUrl: string;
  staffId: number;
};

interface Props {
  isLoadingStaff: boolean;
  staff: Staff[];
}

const CastSlider = ({ staff, isLoadingStaff }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const itemsPerSlide = 8;
  const totalSlides =
    !isLoadingStaff && Math.ceil(staff.length / itemsPerSlide);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
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
    </>
  );
};

export default CastSlider;
