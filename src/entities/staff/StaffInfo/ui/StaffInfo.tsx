import { Image } from "@/shared/ui/image";
import * as classes from "./classes.module.scss";

interface Props {
  posterUrl?: string;
  nameRu?: string;
  profession?: string;
}

const StaffInfo = ({ posterUrl, nameRu, profession }: Props) => {
  return (
    <>
      <span className={classes.staff}>{profession}</span>
      <Image src={posterUrl} alt={nameRu} name={nameRu} />
    </>
  );
};

export default StaffInfo;
