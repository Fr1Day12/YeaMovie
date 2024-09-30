import React, { useState } from "react";
import { Stack } from "@mui/material";
import MovieCard from "@/entities/Movies/ui/MovieCard/ui/MovieCard";
import * as classes from "./classes.module.scss";
import SliderNavigation from "@/shared/ui/SliderNavigation/ui/SliderNavigation";
import { FilmData } from "@/shared/interfaces";

interface Props {
  itemsPerPage?: number;
  items: FilmData[];
  children?: React.ReactNode;
  title?: string;
  text?: string;
  marginTop?: number;
}

const Slider = ({
  items,
  itemsPerPage = 5,
  children,
  title,
  text,
  marginTop = 100,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentIndex * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className={`${
        marginTop === 100 ? classes.container : classes.containerTop
      }`}>
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
      <Stack direction={"row"} gap={"20px"}>
        {currentItems.map((item) => (
          <MovieCard key={item.kinopoiskId} {...item} />
        ))}
      </Stack>
    </div>
  );
};

export default Slider;
