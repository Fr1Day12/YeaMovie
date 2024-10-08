import { useState } from "react";
import MoviesCategory from "@/features/movie/MoviesCategory/ui/MoviesCategory";
import SliderMovie from "@/widgets/SliderMovie/ui/SliderMovie";
import Header from "@/widgets/Header/ui/Header";
import { useMediaQuery } from "react-responsive";
import ToggleSwitch from "@/shared/ui/toggleSwitch/ui/ToggleSwitch";
import * as classes from "./classes.module.scss";

const MoviesPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 871px)" });
  const [currentCategory, setCurrentCategory] = useState("Movies");

  const toggleCategory = () => {
    setCurrentCategory((prevCategory) =>
      prevCategory === "Movies" ? "Shows" : "Movies"
    );
  };

  return (
    <>
      <Header />
      <SliderMovie />
      {isMobile ? (
        <>
          <div className={classes.toggleContainer}>
            <ToggleSwitch
              calendar={currentCategory === "Shows"}
              handleClick={toggleCategory}
              text={true}
            />
          </div>
          <MoviesCategory Category={currentCategory} />
        </>
      ) : (
        <>
          <MoviesCategory Category={"Movies"} />
          <MoviesCategory Category={"Shows"} />
        </>
      )}
    </>
  );
};

export default MoviesPage;
