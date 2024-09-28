import { footer } from "@/shared/constants";
import * as classes from "./classes.module.scss";

const FooterBlocks = () => {
  return (
    <div className={classes.block}>
      {footer.map((item) => {
        return (
          <div key={item.id} className={classes.container}>
            <h3>{item.title}</h3>
            <ul>
              {item.text.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterBlocks;
