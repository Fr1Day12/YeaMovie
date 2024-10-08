import * as classes from "./classes.module.scss";
import { useState } from "react";
import { plans } from "@/shared/constants";
import ToggleSwitch from "@/shared/ui/toggleSwitch/ui/ToggleSwitch";
import PlanCard from "@/widgets/Plan/ui/PlanCard/ui/PlanCard";

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
            Choose the plan that's right for you
          </h2>
          <p className={classes.text}>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <ToggleSwitch calendar={calendar} handleClick={handleClick} />
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
