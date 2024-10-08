import { streamingDevices } from "@/shared/constants";
import * as classes from "./classes.module.scss";
import StreamCard from "@/pages/Home/ui/Stream/ui/StreamCard/ui/StreamCard";

const StreamSection = () => {
  return (
    <section>
      <div className={classes.textContainer}>
        <h2 className={classes.title}>
          We Provide you streaming experience across various devices.
        </h2>
        <p className={classes.text}>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      <div className={classes.containerCard}>
        {streamingDevices.map((device) => (
          <StreamCard
            key={device.id}
            name={device.name}
            img={device.img}
            text={device.text}
          />
        ))}
      </div>
    </section>
  );
};

export default StreamSection;
