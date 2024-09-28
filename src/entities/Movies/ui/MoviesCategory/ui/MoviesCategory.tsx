import * as classes from "./classes.module.scss";
import Categories from "@/shared/ui/Categories/ui/Categories";
import { moviesAndShows } from "@/shared/constants";

interface Props {
  Category: string;
}

const MoviesCategory = ({ Category }: Props) => {
  return (
    <section className={classes.container}>
      <div className={classes.buttonContainer}>
        <div className={classes.block}>{Category} </div>
      </div>

      {moviesAndShows.map((item) => (
        <Categories key={item.id} title={item.title} width={1498} />
      ))}
    </section>
  );
};

export default MoviesCategory;
