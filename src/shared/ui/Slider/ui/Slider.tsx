import React, { useState } from "react";
import { Stack } from "@mui/material";
import MovieCard from "@/entities/MovieCard/ui/MovieCard";
import * as classes from "./classes.module.scss";
import SliderNavigation from "@/shared/ui/SliderNavigation/ui/SliderNavigation";
import { FilmData } from "@/shared/interfaces";

interface Props {
  itemsPerPage?: number;
  items: FilmData[];
  children?: React.ReactNode;
  title?: string;
  text?: string;
}

const Slider = ({ items, itemsPerPage = 5, children, title, text }: Props) => {
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
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
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
