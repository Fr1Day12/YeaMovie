import SupportForm from "@/features/Form/SupportForm";
import * as classes from "./classes.module.scss";

const ContactForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <h2>Welcome to our support page!</h2>
        <p>
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <img
          src={require("@/shared/assets/jpg/Support.jpg")}
          alt="Support"
          width={533}
          height={477}
        />
      </div>
      <div className={classes.rightSection}>
        <SupportForm />
      </div>
    </section>
  );
};

export default ContactForm;
