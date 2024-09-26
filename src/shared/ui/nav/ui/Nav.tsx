import { NavLink } from "react-router-dom";
import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";
import { useState } from "react";

const Nav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <nav className={classes.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        <Button text={"Home"} />
      </NavLink>
      <NavLink
        to="/Movies"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        <Button text={"Movie & Shows"} className={classes.button} />
      </NavLink>
      <NavLink
        to="/Support"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        <Button text={"Support"} />
      </NavLink>
      <NavLink
        to="/Subscribe"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        <Button text={"Subscribe"} />
      </NavLink>
    </nav>
  );
};

export default Nav;
