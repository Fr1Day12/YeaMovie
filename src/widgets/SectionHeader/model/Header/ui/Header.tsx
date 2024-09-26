import * as classes from "./classes.module.scss";
import SearchSvg from "@/shared/assets/svg/search.svg";
import Notification from "@/shared/assets/svg/notifications.svg";
import Logo from "@/shared/assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "@/shared/ui/nav/ui/Nav";
import Search from "@/entities/Movies/ui/SearchMovie/ui/Search";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState("");

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
        <SearchSvg
          width={24}
          height={26}
          onClick={() => setOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        />
        {open && <Search keywords={keywords} setKeywords={setKeywords} />}
        <Notification width={24} height={26} style={{ cursor: "pointer" }} />
      </div>
    </header>
  );
};

export default Header;
