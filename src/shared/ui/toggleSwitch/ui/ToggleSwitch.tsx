import * as classes from "./classes.module.scss";

interface ToggleProps {
  calendar: boolean;
  handleClick: () => void;
}

const ToggleSwitch = ({ calendar, handleClick }: ToggleProps) => {
  return (
    <div className={classes.toggleContainer} onClick={handleClick}>
      <span className={calendar ? classes.active : ""}>Monthly</span>
      <span className={!calendar ? classes.active : ""}>Yearly</span>
    </div>
  );
};

export default ToggleSwitch;
