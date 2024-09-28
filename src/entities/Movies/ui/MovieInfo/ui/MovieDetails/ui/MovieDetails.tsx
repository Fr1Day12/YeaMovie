import * as classes from "./classes.module.scss";
import Button from "@/shared/ui/button/ui/Button";
import Play from "@/shared/assets/svg/play.svg";
import Plus from "@/shared/assets/svg/plus.svg";
import Like from "@/shared/assets/svg/like.svg";
import Volume from "@/shared/assets/svg/volume.svg";

interface Props {
  nameRu: string;
  posterUrl: string;
  shortDescription: string;
  webUrl: string;
}

const MovieDetails = ({
  nameRu,
  posterUrl,
  shortDescription,
  webUrl,
}: Props) => {
  return (
    <>
      <img src={posterUrl} alt="Poster" className={classes.image} />
      <h2 className={classes.title}>{nameRu}</h2>
      <p className={classes.text}>{shortDescription}</p>

      <div className={classes.buttons}>
        <div className={classes.buttonContainer}>
          <Button
            text={"Play Now"}
            className={classes.button}
            onClick={() => window.open(webUrl, "_blank")}>
            <Play />
          </Button>
        </div>
        <div className={classes.icons}>
          <Plus className={classes.svg} />
          <Like className={classes.svg} />
          <Volume className={classes.svg} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
