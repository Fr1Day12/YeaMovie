import { Link } from "react-router-dom";
import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
import { useState } from "react";

const Nav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <nav className={classes.navigation}>
      <Link to="/">
        <Button text={"Home"} onClick={() => {}} />
      </Link>
      <Link to="/Movies">
        <Button text={"Movie & Shows"} onClick={() => {}} />
      </Link>
      <Link to="/Support">
        <Button text={"Support"} onClick={() => {}} />
      </Link>
      <Button text={"Subscribe"} onClick={() => {}} />
    </nav>
  );
};

export default Nav;
