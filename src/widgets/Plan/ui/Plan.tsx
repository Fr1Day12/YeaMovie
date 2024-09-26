import * as classes from "./classes.module.scss";
import { useState } from "react";
import { plans } from "@/shared/constants";
import ToggleSwitch from "@/shared/ui/toggleSwitch/ui/ToggleSwitch";
import PlanCard from "@/widgets/Plan/model/ui/PlanCard";

const Plan = () => {
  const [calendar, setСalendar] = useState(true);

  const handleClick = () => {
    setСalendar((prev) => !prev);
  };

  return (
    <section className={classes.container}>
      <div className={classes.box}>
        <div className={classes.containerText}>
          <h2 className={classes.title}>
            Explore our wide variety of categories
          </h2>
          <p className={classes.text}>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div>
          <ToggleSwitch calendar={calendar} handleClick={handleClick} />
        </div>
      </div>
      <div className={classes.containerCard}>
        {plans.map((plan) => (
          <PlanCard
            priceYear={plan.priceYear}
            calendar={calendar}
            key={plan.id}
            title={plan.title}
            text={plan.text}
            price={plan.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Plan;
