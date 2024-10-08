import React, { useState } from "react";
import { Stack } from "@mui/material";
import * as classes from "./classes.module.scss";
import SliderNavigation from "@/shared/ui/Slider/ui/SliderNavigation/ui/SliderNavigation";
import { FilmData } from "@/shared/interfaces";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";
import { MovieCard } from "@/entities/movie";
import SliderMobile from "@/shared/ui/Slider/ui/SliderMobile/ui/SliderMobile";

interface Props {
  items: FilmData[];
  children?: React.ReactNode;
  title?: string;
  text?: string;
  marginTop?: number;
}

const Slider = ({ items, children, title, text, marginTop = 100 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 871px)" });
  const itemsPerPage = isMobile ? 2 : 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentIndex * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div
      className={`${
        marginTop === 100 ? classes.container : classes.containerTop
      }`}
      {...handlers}>
      <div className={classes.slider}>
        {title || text ? (
          <div>
            {title && <h2 className={classes.title}>{title}</h2>}
            {text && <p className={classes.text}>{text}</p>}
          </div>
        ) : null}
        <SliderNavigation
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          className={`${
            marginTop === 100 ? classes.borderRight : classes.border
          }`}
        />
      </div>
      <Stack gap={"20px"} flexDirection={"row"} justifyContent={"center"}>
        {currentItems.map((item) => (
          <MovieCard key={item.kinopoiskId} {...item} />
        ))}
      </Stack>

      {isMobile && (
        <SliderMobile currentIndex={currentIndex} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Slider;
