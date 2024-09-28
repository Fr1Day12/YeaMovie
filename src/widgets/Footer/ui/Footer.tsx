import * as classes from "./classes.module.scss";
import Facebook from "@/shared/assets/svg/social/facebook.svg";
import Twitter from "@/shared/assets/svg/social/twitter.svg";
import LinkedIn from "@/shared/assets/svg/social/linkedIn.svg";
import FooterBlocks from "@/widgets/Footer/ui/FooterBlocks/ui/FooterBlocks";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.box}>
        <FooterBlocks />

        <div>
          <h5 className={classes.title}>Connect With Us</h5>
          <div className={classes.icons}>
            <Facebook
              width={24}
              height={24}
              className={classes.image}
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
            />
            <Twitter
              width={24}
              height={24}
              className={classes.image}
              onClick={() => window.open("https://twitter.com/", "_blank")}
            />
            <LinkedIn
              width={24}
              height={24}
              className={classes.image}
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
            />
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <p>&copy;2023 streamvib, All Rights Reserved</p>

        <div className={classes.text}>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
