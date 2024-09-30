import useMovieQuery from "@/shared/helpers/hooks/useMovieQuery";
import MoviesCardSkeleton from "@/shared/ui/skeleton/ui/MoviesCardSkeleton";
import Slider from "@/shared/ui/Slider/ui/Slider";

const HomePageSlider = () => {
  const { isLoading, data } = useMovieQuery("Movies");

  if (isLoading) {
    return <MoviesCardSkeleton width={295} />;
  }

  return (
    <Slider
      items={data?.items}
      title={"Explore our wide variety of categories"}
      text={
        "Whether you’re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
      }
      marginTop={200}
    />
  );
};

export default HomePageSlider;
