import Slider from "react-slick";
import * as classes from "./classes.module.scss";
import useMovieQuery from "@/shared/helpers/hooks/useMovieQuery";
import Card from "@/entities/Card/ui/Card";

interface Props {
  sliderRef: React.RefObject<Slider>;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};

const Сarousel = ({ sliderRef }: Props) => {
  const { isLoading, responceTopMovies } = useMovieQuery();
  console.log(responceTopMovies);

  return (
    <div className={classes.containerCards}>
      <Slider
        className={classes.slider}
        adaptiveHeight={true}
        arrows={false}
        ref={sliderRef}
        {...settings}>
        {!isLoading &&
          responceTopMovies.items?.map((category) => (
            <Card
              onClick={() => {}}
              key={category.kinopoiskId}
              img={category.posterUrlPreview}
              name={category.nameEn || category.nameRu}
            />
          ))}
      </Slider>
    </div>
  );
};

export default Сarousel;
