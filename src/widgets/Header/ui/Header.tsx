import * as classes from "./classes.module.scss";
import SearchSvg from "@/shared/assets/svg/search.svg";
import Notification from "@/shared/assets/svg/notifications.svg";
import Logo from "@/shared/assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "@/shared/ui/nav/ui/Nav";
import Search from "@/entities/Movies/ui/SearchMovie/ui/Search";
import Favorites from "@/features/Favorites/ui/Favorites";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const handleFavoritesClose = () => {
    setFavoritesOpen(false);
  };

  return (
    <header className={classes.container}>
        <Link to={"/"}>
          <Logo width={200} height={60} className={classes.logo}/>
        </Link>
        
        <Nav />

      <div className={classes.icons}>
        <SearchSvg
          width={24}
          height={26}
          onClick={() => setOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        />
        {open && <Search keywords={keywords} setKeywords={setKeywords} />}
        <Notification
          width={24}
          height={26}
          style={{ cursor: "pointer" }}
          onClick={() => setFavoritesOpen((prev) => !prev)}
        />
        {favoritesOpen && <Favorites handleClose={handleFavoritesClose} />}
      </div>
    </header>
  );
};

export default Header;
