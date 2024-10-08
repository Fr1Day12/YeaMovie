import { NavLink } from "react-router-dom";
import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";
import Burger from "@/shared/assets/svg/Burger.svg";

interface Props {
  openBurger: boolean;
  onClick: () => void;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/Movies", label: "Movie & Shows" },
  { to: "/Support", label: "Support" },
  { to: "/Subscribe", label: "Subscribe" },
];

const Nav = ({ openBurger, onClick }: Props) => {
  return (
    <>
      <Burger className={classes.burger} onClick={onClick} />

      {openBurger && (
        <ul className={classes.list}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {({ isActive }) => (
                <li
                  className={`${classes.element} ${
                    isActive ? classes.active : ""
                  }`}>
                  {item.label}
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      )}

      <nav className={classes.navigation}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {({ isActive }) => (
              <Button
                text={item.label}
                className={`${classes.button} ${
                  isActive ? classes.active : ""
                }`}
              />
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Nav;
