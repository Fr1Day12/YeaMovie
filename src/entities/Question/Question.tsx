import * as classes from "./classes.module.scss";
import { VFC, SVGProps } from "react";

interface QuestionProps {
  question: string;
  text: string;
  number: string;
  svg: VFC<SVGProps<SVGSVGElement>>;
  showQuestion: null | number;
  onClick: () => void;
  id: number;
}

const Question = ({
  question,
  text,
  number,
  svg: ImgComponent,
  onClick,
  showQuestion,
  id,
}: QuestionProps) => {
  return (
    <div
      onClick={onClick}
      className={`${classes.container} ${
        showQuestion === id ? classes.showAnswer : ""
      }`}>
      <div className={classes.box}>{number}</div>
      <div className={classes.text}>
        <h3>{question}</h3>
        {showQuestion === id && (
          <div className={classes.answer}>
            <p>{text}</p>
          </div>
        )}
      </div>

      <div className={classes.iconContainer}>
        <ImgComponent
          className={`${classes.image} ${
            showQuestion === id ? "" : classes.rotateImage
          }`}
        />
        <span className={classes.verticalLine}></span>
      </div>
    </div>
  );
};

export default Question;
