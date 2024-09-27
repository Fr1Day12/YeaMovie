import * as classes from "./classes.module.scss";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Button from "@/shared/ui/button/ui/Button";

const SupportForm = () => {
  const [selected, setSelected] = useState("IN");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };
  const [submit, setSubmit] = useState(false);

  if (submit) {
    return (
      <div>
        <h2>Thank you for your support</h2>
        <p>We will reach you soon</p>
      </div>
    );
  }

  return (
    <form className={classes.form}>
      <div className={classes.inputGroup}>
        <div className={classes.inputField}>
          <label htmlFor="firstName">FirstName</label>
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
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              showSelectedLabel={false}
              showOptionLabel={false}
              selectedSize={30}
              optionsSize={30}
              selectButtonClassName={classes.flagMenu}
            />
            <input
              type="phone"
              id="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
      </div>

      <div className={classes.inputField}>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your Message" />
      </div>

      <div className={classes.buttonContainer}>
        <div className={classes.checkboxContainer}>
          <input type="checkbox" id="terms" className={classes.checkbox} />
          <label htmlFor="terms" className={classes.checkboxLabel}>
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>
        <Button
          text="Send message"
          onClick={(e) => {
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
          }}
          className={classes.button}
        />
      </div>
    </form>
  );
};

export default SupportForm;
