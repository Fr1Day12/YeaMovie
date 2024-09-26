import Arrow from "@/shared/assets/svg/arrow.svg";
import * as classes from "./classes.module.scss";

interface Props {
  img: string;
  name?: string;
  onClick?: () => void;
}

const Card = ({ img, name }: Props) => {
  return (
    <div className={classes.card}>
      <img src={img} alt="genre" className={classes.image} />

      <div className={classes.text}>
        <span className={classes.span}>{name}</span>
        <Arrow className={classes.arrow} />
      </div>
    </div>
  );
};

export default Card;
