import * as classes from "./classes.module.scss";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({ id, label, type = "text", placeholder }: Props) => (
  <div className={classes.inputField}>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} placeholder={placeholder} />
  </div>
);

export default InputField;
