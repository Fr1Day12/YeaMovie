import * as classes from "./classes.module.scss";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { InputField } from "@/entities/support";

const SupportForm = () => {
  const [selected, setSelected] = useState("IN");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept terms and conditions");
      return;
    }
    setSubmit(true);
  };

  const [submit, setSubmit] = useState(false);

  if (submit) {
    return (
      <h2
        style={{
          textAlign: "center",
        }}>
        Thank you for your support. We will reach you soon!
      </h2>
    );
  }

  return (
    <form className={classes.form}>
      <div className={classes.inputGroup}>
        <InputField
          id="firstName"
          label="First Name"
          placeholder="Enter First Name"
        />
        <InputField
          id="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
        />
      </div>

      <div className={classes.inputGroup}>
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Email"
        />
        <div className={classes.inputField}>
          <label htmlFor="phoneNumber" className={classes.label}>
            Phone Number
          </label>
          <div className={classes.phoneInputContainer}>
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
              className={classes.phoneInput}
            />
          </div>
        </div>
      </div>

      <div className={classes.inputField}>
        <label htmlFor="message" className={classes.label}>
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your Message"
          className={classes.textarea}
        />
      </div>

      <div className={classes.buttonContainer}>
        <div className={classes.checkboxContainer}>
          <input
            type="checkbox"
            id="terms"
            className={classes.checkbox}
            required
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
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
