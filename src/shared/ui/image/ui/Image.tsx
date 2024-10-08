import * as classes from "./classes.module.scss";

interface Props {
  src: string;
  alt: string;
  name: string;
}

const Image = ({ src, alt, name }: Props) => {
  return (
    <div className={classes.container}>
      <img src={src} alt={alt} className={classes.image} />
      <span className={classes.staff}>{name}</span>
    </div>
  );
};

export default Image;
