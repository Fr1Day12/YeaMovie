import * as classes from "./classes.module.scss";
import { VFC, SVGProps } from "react";
import cn from "classnames";

interface QuestionProps {
  question: string;
  text: string;
  number: string;
  svg: VFC<SVGProps<SVGSVGElement>>;
  showQuestion: boolean;
  onClick: () => void;
}

const Question = ({
  question,
  text,
  number,
  svg: ImgComponent,
  onClick,
  showQuestion,
}: QuestionProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        classes.container,
        `${showQuestion ? classes.containerOpen : ""}`
      )}>
      <div className={classes.box}>{number}</div>
      <div className={classes.text}>
        <h3>{question}</h3>
        {showQuestion && (
          <div className={classes.answer}>
            <p>{text}</p>
          </div>
        )}
      </div>

      <div className={classes.iconContainer}>
        <ImgComponent
          className={`${classes.image} ${
            showQuestion ? "" : classes.rotateImage
          }`}
        />
        <span className={classes.verticalLine}></span>
      </div>
    </div>
  );
};

export default Question;
