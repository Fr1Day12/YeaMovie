import * as classes from "./classes.module.scss";
import cn from "classnames";

interface Props {
  text: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
}

const Button = ({
  text,
  onClick,
  className,
  children,
  active = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(classes.button, className)}
      disabled={active}>
      {children}
      {text}
    </button>
  );
};

export default Button;
