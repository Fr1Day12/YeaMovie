import StreamSection from "@/pages/Home/ui/Stream/ui/StreamSection";
import Questions from "@/pages/Home/ui/Questions/ui/Questions";
import Plan from "@/widgets/Plan/ui/Plan";
import HomePageSlider from "@/pages/Home/ui/HomePageSlider/ui/HomePageSlider";

const HomePage = () => {
  return (
    <>
      <HomePageSlider />
      <StreamSection />
      <Questions />
      <Plan />
    </>
  );
};

export default HomePage;
