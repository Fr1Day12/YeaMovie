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
      <p>{name}</p>
    </div>
  );
};

export default Image;
