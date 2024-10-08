import * as classes from "./classes.module.scss";
import SearchSvg from "@/shared/assets/svg/search.svg";
import Notification from "@/shared/assets/svg/notifications.svg";
import Logo from "@/shared/assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "@/shared/ui/nav/ui/Nav";
import Search from "@/features/movie/SearchMovie/ui/Search";
import { Favorites } from "@/shared/ui/Favorites";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const handleFavoritesClose = () => {
    setFavoritesOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setOpenBurger((prev) => !prev);
  };

  return (
    <header className={classes.container}>
      <Link to={"/"}>
        <Logo className={classes.logo} />
      </Link>

      <Nav openBurger={openBurger} onClick={handleOverlayClick} />

      <div className={classes.icons}>
        <SearchSvg
          className={classes.svgIcon}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && <Search keywords={keywords} setKeywords={setKeywords} />}
        <Notification
          className={classes.svgIcon}
          onClick={() => setFavoritesOpen((prev) => !prev)}
        />
        {favoritesOpen && <Favorites handleClose={handleFavoritesClose} />}
      </div>
    </header>
  );
};

export default Header;
