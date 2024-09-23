import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
import { questions } from "@/shared/constants";
import Question from "@/entities/Question/Question";
import svg from "@/shared/assets/svg/stick.svg";
import { useState } from "react";

const Questions = () => {
  const [showQuestion, setShowQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setShowQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.headline}>
          <div className={classes.textContainer}>
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <Button
            text="Ask a Question"
            onClick={() => {}}
            className={classes.button}
          />
        </div>
      </div>
      <div className={classes.containerQuestions}>
        {questions.map((question) => (
          <Question
            key={question.id}
            number={question.number}
            question={question.question}
            text={question.text}
            svg={svg}
            onClick={() => toggleQuestion(question.id)}
            showQuestion={showQuestion}
            id={question.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
