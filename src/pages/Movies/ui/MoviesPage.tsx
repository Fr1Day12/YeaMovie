import MoviesCategory from "@/entities/Movies/ui/MoviesCategory/ui/MoviesCategory";
import SliderMovie from "@/entities/Movies/ui/SliderMovie/ui/SliderMovie";
import Header from "@/widgets/SectionHeader/model/Header/ui/Header";

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
