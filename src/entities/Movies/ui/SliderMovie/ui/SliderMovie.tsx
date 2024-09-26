import * as classes from "./classes.module.scss";
import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";
import Play from "@/shared/assets/svg/play.svg";
import Button from "@/shared/ui/button/ui/Button";

const SliderMovie = () => {
  return (
    <section className={classes.container}>
      <div className={classes.box}>
        <h1>Avengers : Endgame</h1>
        <p>
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>
        <div className={classes.buttons}>
          <div className={classes.buttonContainer}>
            <Button
              text={"Play Now"}
              onClick={() => {}}
              className={classes.button}>
              <Play />
            </Button>
          </div>
          <div className={classes.icons}>
            <Plus className={classes.svg} />
            <Like className={classes.svg} />
            <Volume className={classes.svg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderMovie;
