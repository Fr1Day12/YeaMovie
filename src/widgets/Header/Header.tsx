import Nav from "@/shared/nav/Nav";
import * as classes from "./classes.module.scss";
import Search from "@/shared/assets/svg/search.svg";
import Notification from "@/shared/assets/svg/notifications.svg";
import Logo from "@/shared/assets/svg/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <Link to={"/"}>
          <Logo width={200} height={60} />
        </Link>
      </div>
      <div className={classes.nav}>
        <Nav />
      </div>

      <div className={classes.icons}>
        <Search width={24} height={26} />
        <Notification width={24} height={26} />
      </div>
    </header>
  );
};

export default Header;
