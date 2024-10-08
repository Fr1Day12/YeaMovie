import * as classes from "./classes.module.scss";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}

const MovieInfoBlock = ({ icon: Icon, title, children }: Props) => (
  <div className={classes.block}>
    <div className={classes.header}>
      <Icon className={classes.svg} />
      <p className={classes.title}>{title}</p>
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

export default MovieInfoBlock;
