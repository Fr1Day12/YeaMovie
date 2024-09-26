import * as classes from "./classes.module.scss";
import Categories from "@/shared/ui/Categories/ui/Categories";
import { moviesAndShows } from "@/shared/constants";
import Button from "@/shared/ui/button/ui/Button";

interface Props {
  Category: string;
}

const MoviesCategory = ({ Category }: Props) => {
  return (
    <section className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button text={Category} onClick={() => {}} className={classes.button} />
      </div>

      {moviesAndShows.map((item) => (
        <Categories key={item.id} title={item.title} width={1498} />
      ))}
    </section>
  );
};

export default MoviesCategory;
