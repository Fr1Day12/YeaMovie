import { SupportForm } from "@/features/support";
import * as classes from "./classes.module.scss";

const ContactForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <h2 className={classes.title}>Welcome to our support page!</h2>
        <p className={classes.text}>
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <img
          src={require("@/shared/assets/jpg/Support.jpg")}
          alt="Support"
          className={classes.image}
        />
      </div>
      <div className={classes.rightSection} id="ContactForm">
        <SupportForm />
      </div>
    </section>
  );
};

export default ContactForm;
