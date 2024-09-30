import * as classes from "./classes.module.scss";

interface Props {
  description: string;
}

const MovieDescription = ({ description }: Props) => {
  return (
    <div className={classes.description}>
      <p className={classes.infoTitle}>Description</p>
      <p className={classes.descriptionText}>{description}</p>
    </div>
  );
};

export default MovieDescription;
