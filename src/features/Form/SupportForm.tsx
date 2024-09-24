import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";

const SupportForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.inputGroup}>
        <div className={classes.inputField}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Enter First Name" />
        </div>
        <div className={classes.inputField}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Enter Last Name" />
        </div>
      </div>
      <div className={classes.inputGroup}>
        <div className={classes.inputField}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your Email" />
        </div>
        <div className={classes.inputField}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className={classes.phoneInput}>
            <select>
              <option value="in">🇮🇳</option>
            </select>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
      </div>
      <div className={classes.inputField}>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your Message"></textarea>
      </div>
      <div className={classes.checkboxContainer}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I agree with Terms of Use and Privacy Policy
        </label>
      </div>
      <Button text="Send message" onClick={() => {}} />
    </form>
  );
};

export default SupportForm;
