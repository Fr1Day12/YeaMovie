import MoviesCategory from "@/pages/Movies/MoviesCategory/MoviesCategory";
import SliderMovie from "@/pages/Movies/SliderMovie/SliderMovie";
import Header from "@/widgets/Header/Header";

const MoviesPage = () => {
  return (
    <>
      <Header />
      <SliderMovie />
      <MoviesCategory Category={"Movies"} />
      <MoviesCategory Category={"Shows"} />
    </>
  );
};

export default MoviesPage;
