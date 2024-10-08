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
        <h3
          className={cn(
            classes.title,
            `${showQuestion ? classes.titleOpen : ""}`
          )}>
          {question}
        </h3>
        {showQuestion && <p className={classes.answer}>{text}</p>}
      </div>

      <div className={classes.iconContainer}>
        <ImgComponent
          className={`${classes.image} ${
            showQuestion ? "" : classes.rotateImage
          }`}
        />
        <span className={classes.verticalLine} />
      </div>
    </div>
  );
};

export default Question;
