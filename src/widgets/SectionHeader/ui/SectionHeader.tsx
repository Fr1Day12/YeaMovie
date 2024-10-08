import Header from "@/widgets/Header/ui/Header";
import * as classes from "./classes.module.scss";
import Play from "@/shared/assets/svg/play.svg";
import Button from "@/shared/ui/button/ui/Button";
import { useNavigate } from "react-router-dom";

const SectionHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Movies#MovieInfo");
  };

  return (
    <>
      <div className={classes.background}>
        <Header />
        <h1 className={classes.title}>The Best Streaming Experience</h1>
      </div>

      <div className={classes.textContainer}>
        <p className={classes.text}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <p className={classes.textPhone}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
      </div>

      <Button
        text="Start Watching Now"
        onClick={() => handleClick()}
        className={classes.button}>
        <Play />
      </Button>
    </>
  );
};

export default SectionHeader;
