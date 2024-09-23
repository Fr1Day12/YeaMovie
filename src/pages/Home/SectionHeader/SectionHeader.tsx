import Header from "@/widgets/Header/Header";
import * as classes from "./classes.module.scss";
import Button from "@/shared/button/Button";
import Play from "@/shared/assets/svg/play.svg";
import { useEffect, useState } from "react";

const SectionHeader = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 871);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 871);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.background}>
        <Header />
        <div className={classes.containerText}>
          <h1 className={classes.title}>The Best Streaming Experience</h1>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        {isSmallScreen ? (
          <p className={classes.textPhone}>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
        ) : (
          <div>
            <p className={classes.text}>
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
        )}
      </div>

      <div className={classes.buttonContainer}>
        <Button
          text="Start Watching Now"
          onClick={() => {}}
          className={classes.button}>
          <Play />
        </Button>
      </div>
    </section>
  );
};

export default SectionHeader;
