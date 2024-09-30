import { NavLink } from "react-router-dom";
import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";

const Nav = () => {
  return (
    <nav className={classes.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        {({ isActive }) => (
          <Button
            text={"Home"}
            className={`${classes.button} ${isActive ? classes.active : ""}`}
          />
        )}
      </NavLink>
      <NavLink
        to="/Movies"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        {({ isActive }) => (
          <Button
            text={"Movie & Shows"}
            className={`${classes.button} ${isActive ? classes.active : ""}`}
          />
        )}
      </NavLink>
      <NavLink
        to="/Support"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        {({ isActive }) => (
          <Button
            text={"Support"}
            className={`${classes.button} ${isActive ? classes.active : ""}`}
          />
        )}
      </NavLink>
      <NavLink
        to="/Subscribe"
        className={({ isActive }) => (isActive ? classes.active : "")}>
        {({ isActive }) => (
          <Button
            text={"Subscribe"}
            className={`${classes.button} ${isActive ? classes.active : ""}`}
          />
        )}
      </NavLink>
    </nav>
  );
};

export default Nav;
