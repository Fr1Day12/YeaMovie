import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";

interface Props {
  title: string;
  text: string;
  price: string;
  calendar: boolean;
  priceYear: string;
}

const PlanCard = ({ title, text, price, calendar, priceYear }: Props) => {
  return (
    <div className={classes.container}>
      <h4>{title}</h4>
      <p>{text}</p>
      <p className={classes.price}>
        <span>{`${calendar ? price : priceYear}`}</span>/mounth
      </p>

      <div className={classes.buttonContainer}>
        <Button
          text={"Start Free Trial"}
          onClick={() => {}}
          className={classes.button}
        />
        <Button
          text={"Choose Plan"}
          onClick={() => {}}
          className={classes.buttonRed}
        />
      </div>
    </div>
  );
};

export default PlanCard;
