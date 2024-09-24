import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
import Categories from "@/pages/Home/Categories/Categories";

const MoviesCategory = () => {
  return (
    <section className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button text="Movies" onClick={() => {}} className={classes.button} />
      </div>

      <Categories title={"Our Genres"} className={classes.movieCarousel} />
    </section>
  );
};

export default MoviesCategory;
