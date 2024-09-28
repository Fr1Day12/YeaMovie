import * as classes from "./classes.module.scss";
import { VFC, SVGProps } from "react";

interface Props {
  img: VFC<SVGProps<SVGSVGElement>>;
  name: string;
  text: string;
}

const StreamCard = ({ img: ImgComponent, name, text }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <ImgComponent className={classes.image} />
        <h3>{name}</h3>
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default StreamCard;
