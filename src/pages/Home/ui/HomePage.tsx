import StreamSection from "@/pages/Home/ui/Stream/ui/StreamSection";
import Questions from "@/pages/Home/ui/Questions/ui/Questions";
import SectionHeader from "@/pages/Home/ui/SectionHeader/ui/SectionHeader";
import Plan from "@/widgets/Plan/ui/Plan";
import useMovieQuery from "@/shared/helpers/hooks/useMovieQuery";
import Slider from "@/shared/ui/Slider/ui/Slider";

const HomePage = () => {
  const { isLoading, data } = useMovieQuery("Movies");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const items = data.items || [];

  return (
    <>
      <SectionHeader />
      <Slider
        items={items}
        title={"Explore our wide variety of categories"}
        text={
          "Whether you’re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
        }
        marginTop={200}
      />
      <StreamSection />
      <Questions />
      <Plan />
    </>
  );
};

export default HomePage;
