import Button from "@/shared/ui/button/ui/Button";
import * as classes from "./classes.module.scss";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

interface Props {
  title: string;
  text: string;
  price: string;
  calendar: boolean;
  priceYear: string;
}

const PlanCard = ({ title, text, price, calendar, priceYear }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Subscribe");
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.text}>{text}</p>
      <p className={classes.price}>
        <span className={classes.priceSpan}>{`${
          calendar ? price : priceYear
        }`}</span>{" "}
        /mounth
      </p>

      <div className={classes.buttonContainer}>
        <Button
          text={"Start Free Trial"}
          onClick={() => handleClick()}
          className={classes.button}
        />
        <Button
          text={"Choose Plan"}
          onClick={() => handleClick()}
          className={cn(classes.button, classes.buttonRed)}
        />
      </div>
    </div>
  );
};

export default PlanCard;
