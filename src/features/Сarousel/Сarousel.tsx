import Card from "@/entities/Card/Card";
import { filmsCategory } from "@/shared/constants";
import Slider from "react-slick";
import * as classes from "./classes.module.scss";

interface СarouselProps {
  sliderRef: React.RefObject<Slider>;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const Сarousel = ({ sliderRef }: СarouselProps) => {
  return (
    <div className={classes.containerCards}>
      <Slider
        className={classes.slider}
        adaptiveHeight={true}
        arrows={false}
        ref={sliderRef}
        {...settings}>
        {filmsCategory.map((category) => (
          <Card
            onClick={() => {}}
            key={category.id}
            img={category.url}
            name={category.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Сarousel;
