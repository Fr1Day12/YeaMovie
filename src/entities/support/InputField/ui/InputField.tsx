import * as classes from "./classes.module.scss";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({ id, label, type = "text", placeholder }: Props) => (
  <div className={classes.inputField}>
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={classes.input}
    />
  </div>
);

export default InputField;
