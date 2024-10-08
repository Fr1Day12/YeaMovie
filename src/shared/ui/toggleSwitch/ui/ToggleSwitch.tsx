import * as classes from "./classes.module.scss";

interface ToggleProps {
  calendar: boolean;
  handleClick: () => void;
  text?: boolean;
}

const ToggleSwitch = ({ calendar, handleClick, text }: ToggleProps) => {
  return (
    <div className={classes.toggleContainer} onClick={handleClick}>
      <span className={calendar ? classes.active : ""}>
        {text ? "Movies" : "Monthly"}
      </span>
      <span className={!calendar ? classes.active : ""}>
        {text ? "Shows" : "Yearly"}
      </span>
    </div>
  );
};

export default ToggleSwitch;
