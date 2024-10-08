import * as classes from "./classes.module.scss";

interface Props {
  currentIndex: number;
  totalPages: number;
}

const SliderMobile = ({ currentIndex, totalPages }: Props) => {
  return (
    <div className={classes.lineContainer}>
      <div className={classes.lineBackground}>
        <div
          className={classes.lineActive}
          style={{
            width: `${(currentIndex / (totalPages - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SliderMobile;
