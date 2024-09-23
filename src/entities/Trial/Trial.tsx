import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";

const Trial = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Start your free trial today!</h2>
        <p>
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>

      <Button
        text={"Start Free Trial"}
        onClick={() => {}}
        className={classes.button}
      />
    </div>
  );
};

export default Trial;
