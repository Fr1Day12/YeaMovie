import Button from "@/shared/ui/button/ui/Button";
import * as classes from "./classes.module.scss";
import { useNavigate } from "react-router-dom";

const Trial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Subscribe");
  };
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h2 className={classes.title}>Start your free trial today!</h2>
        <p className={classes.text}>
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>

      <Button
        text={"Start Free Trial"}
        onClick={() => handleClick()}
        className={classes.button}
      />
    </div>
  );
};

export default Trial;
