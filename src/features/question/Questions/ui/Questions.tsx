import * as classes from "./classes.module.scss";
import { questions } from "@/shared/constants";
import svg from "@/shared/assets/svg/stick.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Question } from "@/entities/question";

const Questions = () => {
  const [openId, setOpenId] = useState<number>(0);

  const toggleQuestion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Support#ContactForm");
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.headline}>
          <div>
            <h2 className={classes.title}>Frequently Asked Questions</h2>
            <p className={classes.text}>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <Button
            text="Ask a Question"
            onClick={() => handleClick()}
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
            showQuestion={openId === question.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
